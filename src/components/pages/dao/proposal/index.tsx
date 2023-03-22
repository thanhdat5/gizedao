import GZProposals from "components/template/dao/proposal"
import { DATA_PROPOSALS } from "constants/layout"
import { useEffect, useState } from "react"

const GZProposalPage = () => {
  const [optionSelected, setOptionSelected] = useState("all");

  useEffect(() => {
    // change data 
  }, [optionSelected])

  return (
    // change data to empty to view no proposal component
    <GZProposals data={DATA_PROPOSALS} onChangeOption={setOptionSelected} option={optionSelected}/>
  )
}

export default GZProposalPage