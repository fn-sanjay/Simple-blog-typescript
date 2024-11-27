const trends = [
    {
      title: "Be the Person You Are on Vacation",
      author: "Maren Torff",
    },
    {
      title: "Hate NFTs? I have some bad news...",
      author: "Zain Levin",
    },
    {
      title: "The real impact of dark UX patterns",
      author: "Lindsey Curtis",
    },
  ];

export default function TrendsList() {
    return(
        <div className="bg-white rounded-lg shadow mt-8 p-4">
            <h3 className="text-lg font-semibold mb-4">📈 Today's top trends</h3>
            <ul className="space-y-4">
                {trends.map((trend,index)=>(
                    <li key={index} className="flex flex-col">
                        <span className="font-medium">{trend.title}</span>
                        <span className="text-gray-500 text-sm">{trend.author}</span>

                    </li>
                ))}
            </ul>
        </div>

    );
}