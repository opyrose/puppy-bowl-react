import { useEffect } from "react";

import { useNavigate } from "react-router-dom"

const AllPuppys = ({ puppys, setPuppys }) => {

  const navigate = useNavigate();

  useEffect(() => {

    const getData = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players`)
      const results = await response.json();
      const puppyObjects = results.data.players

      setPuppys(puppyObjects)
    }
    getData();

  }, []);

  return (

    <section id="all-puppys">
      {
        puppys.map((singlePuppy) => {
          return (
            <section key ={singlePuppy.id}
            onClick={()=>{ navigate (`/puppy/${singlePuppy.id}`)}}>
              <img src={singlePuppy.imageUrl}
                alt={`A picture of ${singlePuppy.name}`}
                height={250}
                width={200} />
              <h1>{singlePuppy.name}</h1>
            </section>
          )
        })
      }
    </section>
  )
};
export default AllPuppys