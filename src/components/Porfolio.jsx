import React from "react";
import NavBar from "./NavBar";
import s from './Porfolio.css';


export function Porfolio () {
    return (
   <section>
        <NavBar/>  
   <div className={s.container}>
    <div class="col-md-8 col-sm-12 col-xs-12" className={s.item}>
      <div className={s.box}>
        <a href="#" data-toggle="modal" data-target="#1">
        <img src={require("../assets/Session1/01.jpg")} alt="img not found"/>
        </a>
        <div className={`${s.modal} ${s.fade}`} id="1" tabindex="-1" role="dialog">
          <div className={s.dialog} role="document">
            <div className={s.content}>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className={s.body}>
              <img src={require("../assets/Session2/06.jpg")} alt="img not found" />
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6 co-xs-12" className={s.item}>
      <div className={s.box}>
        <a href="#" data-toggle="modal" data-target="#2">
        <img src={require("../assets/Session3/n2.jpg")} alt="img not found"/>
        </a>
        <div className={`${s.modal} ${s.fade}`} id="2" tabindex="-1" role="dialog">
          <div className={s.dialog} role="document">
            <div className={s.content}>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className={s.body}>
              <img src={require("../assets/Session1/02.jpg")} alt="img not found"/>
              </div>
                <div class="col-md-12" className={s.description}>
                  <h4>This is the second one on my Gallery</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`col-md-4 col-sm-6 co-xs-12 ${s.item}`}>
      <div className={s.box}>
        <a href="#" data-toggle="modal" data-target="#3">
        <img src={require("../assets/Session1/03.jpg")} alt="img not found"/>
        </a>
        <div className={`${s.modal} ${s.fade}`} id="3" tabindex="-1" role="dialog">
          <div className={s.dialog} role="document">
            <div className={s.content}>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className={s.body}>
              <img src={require("../assets/Session1/04.jpg")} alt="img not found"/>
              </div>
                <div className={`col-md-12 ${s.description}`}>
                  <h4>This is the third one on my Gallery</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`col-md-8 col-sm-12} co-xs-12 ${s.item}`}>
      <div className={s.box}>
        <a href="#" data-toggle="modal" data-target="#4">
        <img src={require("../assets/Session1/05.jpg")} alt="img not found"/>
        </a>
        <div className={`${s.modal} ${s.fade}`} id="4" tabindex="-1" role="dialog">
          <div className={s.dialog} role="document">
            <div className={s.content}>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className={s.body}>
              <img src={require("../assets/Session1/01.jpg")} alt="img not found"/>
              </div>
                <div className={`col-md-12 ${s.description}`}>
                  <h4>This is the fourth one on my Gallery</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>    
      <div className={s.container}>
     <div className={`ol-md-8 col-sm-12 co-xs-12 ${s.item}`}>
      <div className={s.box}>
        <a href="#" data-toggle="modal" data-target="#1">
        <img src={require("../assets/Session2/04.jpg")} alt="img not found"/>
        </a>
        <div className={`${s.modal} ${s.fade}`} id="1" tabindex="-1" role="dialog">
          <div className={s.dialog} role="document">
            <div className={s.content}>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className={s.body}>
              <img src={require("../assets/Session2/04.jpg")} alt="img not found"/>
              </div>
                <div className={`col-md-12 ${s.description}`}>
                  <h4>This is the first one on my Gallery</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`col-md-4 col-sm-6 co-xs-12 ${s.item}`}>
      <div className={s.box}>
        <a href="#" data-toggle="modal" data-target="#2">
        <img src={require("../assets/Session2/08.jpg")} alt="img not found"/>
        </a>
        <div className={`${s.modal} ${s.fade}`} id="2" tabindex="-1" role="dialog">
          <div className={s.dialog} role="document">
            <div className={s.content}>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className={s.body}>
              <img src={require("../assets/Session2/08.jpg")} alt="img not found"/>
              </div>
                <div className={`col-md-12 ${s.description}`}>
                  <h4>This is the second one on my Gallery</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`col-md-4 col-sm-6 co-xs-12 ${s.item}`}>
      <div className={s.box}>
        <a href="#" data-toggle="modal" data-target="#3">
        <img src={require("../assets/Session2/06.jpg")} alt="img not found"/>
        </a>
        <div className={`${s.modal} ${s.fade}`} id="3" tabindex="-1" role="dialog">
          <div className={s.dialog} role="document">
            <div className={s.content}>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className={s.body}>
              <img src={require("../assets/Session2/06.jpg")} alt="img not found"/>
              </div>
                <div className={`col-md-12 ${s.description}`}>
                  <h4>This is the third one on my Gallery</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`col-md-8 col-sm-12 co-xs-12 ${s.item}`}>
      <div className={s.box}>
        <a href="#" data-toggle="modal" data-target="#4">
        <img src={require("../assets/Session2/07.jpg")} alt="img not found"/>
        </a>
        <div className={`${s.modal} ${s.fade}`} id="4" tabindex="-1" role="dialog">
          <div className={s.dialog} role="document">
            <div className={s.content}>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div className={s.body}>
              <img src={require("../assets/Session2/07.jpg")} alt="img not found"/>
              </div>
                <div className={`col-md-12 ${s.description}`}>
                  <h4>This is the fourth one on my Gallery</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </section>

    )
}
