import React from 'react'
import { Search } from 'lucide-react'

interface TrendingSearchProps {
  title: string;
}

const TrendingSearch: React.FC<TrendingSearchProps> = ({ title }) => {
  return (
    <div className="rounded-md border-[2px] border-primaryGray border-opacity-30 flex p-2 bg-[#131D277A] space-x-3 h-fit">
      <div className="my-1">
        <Search size={18}/>
      </div>
      <span>{title}</span>
    </div>
  )
}

export default TrendingSearch
