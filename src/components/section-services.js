import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import faCameraRetro from '@fortawesome/fontawesome-free-solid/faCameraRetro';
import Camera from '../images/camera.svg';
import Video from '../images/video.svg';
import Code from '../images/code.svg';

fontawesome.library.add(faCameraRetro);

export default class SectionServices extends Component {
  render() {
    return (
      <div id="services" className="section border-bottom">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-md-4 icon-3xl">
              <img src={Camera} className="camera-icon" />

              <h5 className="margin-top-20">Photography</h5>
              <p>
                From commercial product shoots to family portraits and weddings
                I can help you add that extra spark of creativity and
                professionalism while always working within your budget.
              </p>
            </div>

            <div className="col-12 col-md-4 icon-3xl">
              <img src={Video} className="video-icon" />
              <h5 className="margin-top-20">Videography</h5>
              <p>
                Lights! Camera! Drones? Ask us how our drones can add that extra
                something to your shoots. From the first shutter to the last
                after effects pre compile I have all Videography needs covered.
              </p>
            </div>

            <div className="col-12 col-md-4 icon-3xl">
              <img src={Code} className="code-icon" />
              <h5 className="margin-top-20">Web Development</h5>
              <p>
                With over a decade of web development experience from Ruby, PHP,
                Elixir to animated Adobe Flash banner ads I have seen and done
                it all. Need a site? Ask us how I can build you one within your
                budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
