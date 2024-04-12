import React from 'react'
import { Search } from 'lucide-react'

interface TrendingSearchProps {
  title: string;
}

const TrendingSearch: React.FC<TrendingSearchProps> = ({ title }) => {
  return (
    <div className="rounded-md text-left border-[2px] items-start border-primaryGray border-opacity-30 flex p-2 bg-[#131D277A] space-x-3 h-fit">
      <div className="my-0.5">
        <Search size={16}/>
      </div>
      <span>{title}</span>
    </div>
  )
}

export default TrendingSearch
