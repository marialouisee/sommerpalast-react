import React from 'react'
// import '../scss/main.scss'

const Home = () => {
    return (
        <section id='home'>

                <h1>WILLKOMMEN im SOMMERPALAST</h1>

               
                <p> Im herrlichen Halbschatten einer wunderbaren Platane steht mitten in Vitte auf der Insel Hiddensee in strahlendem Weiß der <i>Sommerpalast Hiddensee</i>. <br/> <br/>
                Früher mal Gästehaus, mal städtische Turnhalle, lädt unser aus dem Dornröschenschlaf erwecktes Schmuckstück Inselbewohner und Feriengäste zum Innehalten bei einem frisch gebrühten Kaffee, einem Stück selbstgebackenen Kuchen und hausgemachtem Eis ein. <br/> <br/>
                </p>  
                    
                 {/* <img className="noDisplayS" src={process.env.PUBLIC_URL + "/img/house-4028391_1920.jpeg"} alt=""/>
                    */}
                
                <div>
                     <img src={process.env.PUBLIC_URL + "/img/logoWithBg.png"} alt=""/>
                </div>
                
                        
         </section>
    )
}

export default Home
