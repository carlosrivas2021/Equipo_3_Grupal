import styled from "@emotion/styled";

const Media = {
    "@media (max-width: 600px)": {
      width: "100%",
    },
}; 

export const Container = styled.div({
    height: '100vh',
    display: 'grid',
    placeItems: 'center'
});

export const Movile = styled.div({
    width: '600px',
    height: '100%',
    ...Media
});

export const ContainerNavbar = styled.div({
    height: '50px',
});

export const Pages = styled.div({
    height: '93%',
    overflowY: 'scroll',
    '::-webkit-scrollbar': {
        display: 'none'
    }
});
