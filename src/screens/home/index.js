import React from 'react';
import { Wrapper, Container, Header, Balance, BalanceContainer, BalanceTitle } from './styles';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';

export default function Home(){
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 2,71</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />

                </Header>
                <Suggestions />
                <Activities />
            </Container>
        </Wrapper>
    )
}