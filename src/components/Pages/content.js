import React from 'react'

function content(){
    return( 
<div>
  <div id="hero" className="hero route bg-image" style={{backgroundImage: 'url(assets/img/hero-bg.jpg)'}}>
    <div className="overlay-itro" />
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          <h1 className="hero-title mb-4">I Am WayanWeda</h1>
          <p className="hero-subtitle"><span className="typed" data-typed-items="Student of Klabat University" /></p>
        </div>
      </div>
    </div>
  </div>
  <main id="main">
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="assets/img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>I Wayan Krisna Weda</span></p>
                        <p><span className="title-s">Profile: </span> <span>Student</span></p>
                        <p><span className="title-s">Email: </span> <span>contoh@email.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>(+62) 557-0089-2223</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span>C++</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                      Halo nama saya I Wayan Krisna Weda. Saya adalah anak pertama dari 2 bersaudara, yang lahir
                      pada tanggal 19 Mei 2003. Sekilas mengenai pendidikan saya. Pada Tahun 2014 saya menamatkan
                      pendidikan SD saya di SDN 2 Pobundayan, dan kemudian melanjutkan pendidikan SMP saya di SMP 4 Kotamobagu
                      pada tahun 2014 sampai 2017 yang kemudian melanjutkan SMA saya di SMK Negeri 2 Kotamobagu dan tamat pada Tahun 2020.
                    </p>
                    <p className="lead">
                      Pada saat ini saya duduk di bangku kuliah semester 5, Fakultas Ilmu Komputer, jurusan Informatika. Alasan
                      mengapa saya mengambil jurusan Informatika karena saya mempunyai minat dalam Ilmu Komputer baik itu Website,
                      Internet, Mobile App, Games,Desain etc.
                    </p>
                    <p className="lead">
                      Kedepannya saya ingin lebih memperdalam dan berfokus dalam mempelajari UI/UX. Alasannya karena saya ingin
                      menjadi seorang UI/UX Developer dan bekerja di International Company. Dan yang paling saya inginkan adalah 
                      bekerja sebagai seorang UI/UX Developer di Apple Company
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: 'url(assets/img/overlay-bg.jpg)'}}>
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Send Message Us
                      </h5>
                    </div>
                    <div>
                      <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Anda dapat menghubungi saya melalui contact nomor hp dan email yang tertera
                      </p>
                      <ul className="list-ico">
                        <li><span className="bi bi-geo-alt" /> Indonesia, Sulawesi Utara, Menado</li>
                        <li><span className="bi bi-phone" /> (+62) 111-1111-1111</li>
                        <li><span className="bi bi-envelope" /> contoh@email.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href><span className="ico-circle"><i className="bi bi-facebook" /></span></a></li>
                        <li><a href><span className="ico-circle"><i className="bi bi-instagram" /></span></a></li>
                        <li><a href><span className="ico-circle"><i className="bi bi-twitter" /></span></a></li>
                        <li><a href><span className="ico-circle"><i className="bi bi-linkedin" /></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>



        
    )
}

export default content