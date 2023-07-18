import React from "react"
import Split from "react-split"
import ProblemDescription from "./ProblemDescription.tsx/ProblemDescription"
import Playground from "./Playground/Playground"
import { Problem } from "@/utils/types/problem"

type WorkspaceProps = {
  problem: Problem
}

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  return (
    <Split className="split">
      <ProblemDescription problem={problem} />
      <Playground problem={problem} />
    </Split>
  )
}
export default Workspace
