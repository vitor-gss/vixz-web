import React from "react"

export const DowEnd = () => {
  return (
<section class="download section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sectioner-header text-center white">
              <h3>Baixe nosso App</h3>
              <span class="line"></span>
              {/* <p class="white">Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem
                faucibus, vestibulum ante in, pharetra ante.</p>  */}
            </div>
          </div>
          <div class="col-md-12">
            <div class="section-content text-center">
              <ul>
                <li><a href="#"><img src="./images/appstore.png" class="wow fadeInUp"
                      data-wow-delay="0.4s" /></a></li>
                <li><a href="#"><img src="./images/playstore.png" class="wow fadeInUp"
                      data-wow-delay="0.7s" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}