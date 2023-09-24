import React from 'react'
import Button from "../../buttons/Button"
import { greeting} from "../../portfolio"
function Resume() {
  return (
    <div>{greeting.resumeLink && (
      <Button
            text="See my resume"
            newTab={true}
            href={greeting.resumeLink}
          />
        )}</div>
  )
}

export default Resume