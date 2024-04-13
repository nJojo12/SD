import React ,{useState} from 'react'
import Index from '../../routes/Index'

import { InputContainer, Wrapper ,Card,LandingPageContainer} from './LandingPage.styles'



const LandingPage = () => {



  return (<>
 
    <LandingPageContainer>

      <Wrapper>
        <Card>
          <section class='top'>
         
          <img src='#'></img>
          <h1> SYNERGY</h1>
                  
            
          </section >
            <section class='bottom'>
              <InputContainer>
              <img src='#'></img>
                <input type='text' placeholder='Email'  />
              
              </InputContainer>
              <InputContainer>
              <img src='#'></img>
              <input type='text' placeholder='Password'  />
              
              </InputContainer>

             
              
              <button class='login'>Get Started</button>
              <Index></Index>
         

            </section>
                      
      


        </Card>

    </Wrapper>

    </LandingPageContainer> </>
  
  )
}

export default LandingPage;
