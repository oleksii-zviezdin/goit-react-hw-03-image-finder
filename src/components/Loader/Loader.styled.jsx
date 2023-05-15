import styled from "@emotion/styled";

export const LoaderWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    backdrop-filter: blur(3px);
`