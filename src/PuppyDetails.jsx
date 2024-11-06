import { useState, useEffect } from "react"
import { useParams, Navigate, useNavigate } from "react-router-dom";

const PuppyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPuppy, setSelectedPuppy] = useState([])

  useEffect(() => {
    const getPuppy = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players/${id}`)
      const data = await response.json(``);
      const singlePuppy = data.data.player
      setSelectedPuppy(singlePuppy)
      console.log(singlePuppy)
    }
    getPuppy()
  }, [])


  return (
    <>
      <img src={selectedPuppy.imageUrl}
        alt={`A picture of ${selectedPuppy.name}`}
        width={200} height={250}
      />:
      <h1>{selectedPuppy.name}</h1>
      <h2>{selectedPuppy.breed}</h2>
      <h2>{selectedPuppy.status}</h2>
     
      <button onClick={(() => { navigate(`/`) })}>Back</button>
    </>
  )
};

export default PuppyDetails
