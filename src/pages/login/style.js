import styled from '@emotion/styled';

export const LoginContainer = styled.div({
    height: '90%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    padding: '20px',
    margin: '7px',
    boxShadow: '0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05);'
});

export const Title = styled.h1({
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '1.5em'
});

export const BtnLogin = styled.button({
    width: '100%',
    height: '40px',
    color: "#FFF",
    background: "#11ac8b",
    boxShadow: '0px 0px 0px #11ac8b',
    transition: 'all ease .3s',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    ':hover': {
        boxShadow: '0px 5px 15px rgba(17, 172, 139, 0.247)',
    }
})

export const Alert = styled.div(({status}) => ({
    background: `${status === "false" ? 'rgba(255, 0, 0, 0.253)': 'rgba(17, 172, 139, 0.247)'}`,
    borderRadius: '5px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    color: "#FFF"
}))