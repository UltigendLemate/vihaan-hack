import requests
import praw


reddit = praw.Reddit(
    client_id="tqqp7ymtamHhcMc45Gobqw",
    client_secret="gAhyZTp0esVIIiXjwVBnzVS0qxk89Q",
    user_agent="GargDivanshu",
    # password="D1V@n$huReddit",
    # user_agent="Comment Extraction (by u/Anonymous__Explorer)",
    # username="Anonymous__Explorer",
)

# # assume you have a praw.Reddit instance bound to variable `reddit`
subreddit = reddit.subreddit("chatgpt")
# print(reddit.read_only)
# print('First subreddit: %s' % subreddit)

# print('---------------------------')
# print(subreddit.display_name)
# # Output: redditdev
# print(subreddit.title)
# # Output: reddit development
# print(subreddit.description)
# # Output: a subreddit for discussion of ...
# print('---------------------------')


# # assume you have a Subreddit instance bound to variable `subreddit`
# for submission in subreddit.hot(limit=10):
#     print('SUBMISSION TITLE: %s' % submission.title)
#     print(submission.title)
#     # Output: the submission's title
#     print(submission.selftext)
#     print(submission.score)
#     # Output: the submission's score
#     print(submission.id)
#     # Output: the submission's ID
#     print(submission.url)
#     # Output: the URL the submission points to or the submission's URL if it's a self post
#     print('---------------------------')
    
# for comment in reddit.subreddit("test").comments(limit=25):
#     print('COMMENT:')
#     print(comment.author)
#     print(comment.body)
#     print('---------------------------')

# Loop through the hot submissions in the subreddit
for submission in subreddit.hot(limit=10):  # Adjust the limit as per your needs
    print(f'SUBMISSION TITLE: {submission.title}')
    print(f'URL: {submission.url}')
    print('------------------------------------------------')

    submission.comments.replace_more(limit=0)  # This line ensures all MoreComments objects are removed
    for comment in submission.comments.list():  # `.list()` flattens the comment forest
        if comment.is_root:  # Checks if the comment is a top-level comment
            print(f'PARENT COMMENT ID: {comment.id} | Author: {comment.author}')
            print(f'PARENT COMMENT: {comment.body}')
            print('Replies:')
            
            for reply in comment.replies.list():  # Iterate through all replies to this parent
                print(f'-- REPLY FROM: {reply.author}')
                print(f'-- REPLY BODY: {reply.body}')
            print('------------------------------------------------')
