import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import styled from 'styled-components'

const OurTeam = () => {
    return (
        <Wrapper>
        <div className='products-container'>
            
                            { Sdata.map((val, ind) => {
                                    return <Card
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    />
                                })}
                            

                        </div>
             
            </Wrapper>
    )
}

const Wrapper = styled.section`
  img {
    height: 468px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`



export default OurTeam;