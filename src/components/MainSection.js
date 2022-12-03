import React from 'react'
import './MainSection.css'
import BannerCTA from './BannerCTA'
import Features from './Features'
function MainSection() {
  return (
    <div className="mainSectionDiv" style={{"background-image": "url('https://static.grammarly.com/assets/files/06666c30f97cce25ac1cf1c4573332c2/swoosh.png')"}}>
      <div>
        <BannerCTA header="Aim High With Brilliant Writing" buttonName="Upgrade to Grammarly Premium" />
        <Features />
      </div>
    </div>
  )
}

export default MainSection