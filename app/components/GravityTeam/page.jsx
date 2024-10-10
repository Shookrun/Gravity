import React from "react";

const GravityTeam = () => {
    let arr = [
        {id:1,title:"~$100 billion",desc:"cumulative trading volume to date", border:""},
        {id:2,title:"0.8%",desc:"of the global crypto spot trading volume", border:"border-l-2"},
        {id:3,title:"~30",desc:"Gravity Teammates (& growing)", border:"border-l-2"},
        {id:4,title:"25+",desc:"leading global and local crypto exchanges", border:"border-l-2"},
        {id:5,title:"2017",desc:"start, crypto-natives", border:"border-t-2"},
        {id:6,title:"1,200+",desc:"crypto-asset pairs", border:"border-t-2 border-l-2"},
        {id:7,title:"24/7",desc:"liquidity", border:"border-t-2 border-l-2"},
        {id:8,title:"5 billion+",desc:"trades done to date", border:"border-t-2 border-l-2"},

    ]
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col">
        <div className="flex  flex-col items-center gap-6 justify-center">
          <h2 className="text-4xl">About Gravity Team</h2>
          <p className="text-center w-[40%]">
            At Gravity Team, we are on the mission to balance the supply and
            demand across crypto markets worldwide. We are a crypto native
            market maker founded by traders, developers, and innovators who are
            strong believers and supporters of the future of decentralization
            and digital assets.
          </p>
        </div>
        <div className="flex mt-10  justify-center items-center flex-wrap px-36 ">
          
          {arr.map(({id,title,desc,border})=>(
             <div key={id} className={`flex flex-col h-[180px] border-[#5FA4E6] ${border} justify-center items-center p-4 w-[24%] text-center`}>
             <h2 className="text-4xl">{title}</h2>
             <p>{desc}</p>
             
         </div>
))}
          
        </div>
      </div>
    </div>
  );
};

export default GravityTeam;
