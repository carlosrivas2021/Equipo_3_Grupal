import styled from "@emotion/styled";

export const Container = styled.div({
    height: "40px",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    ":focus-within": {
        label: {
            top: "-20px",
            left: "-5px",
            boxShadow: "5px 10px 15px rgba(0, 0, 0, 0.126)"
        }
    }
});

export const InputComponent = styled.input({
    height: "100%",
    width: "100%",
    paddingLeft: "55px",
    borderRadius: "5px",
    background: "#FFF",
    outline: "none",
    border: "none"
})

export const LabelIcon = styled.label({
    height: "100%",
    display: "grid",
    placeItems: "center",
    borderRadius: "5px",
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "50px",
    transition: "all ease .3s",
    background: "#FFF",
})