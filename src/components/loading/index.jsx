import React from 'react'

import { Container, ComponentContainer } from './styles'
import Layout from '../layout'

const Loading = ({layout}) => {
  return layout ? 
    (
    <Layout >
        <ComponentContainer>
            <div class="three-body">
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
            </div>
        </ComponentContainer>
    </Layout>
    )
    :(
    <Container >
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    </Container>
    )

}

export default Loading