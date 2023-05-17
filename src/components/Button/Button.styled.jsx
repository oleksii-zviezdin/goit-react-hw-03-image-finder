import styled from "@emotion/styled";

export const LoadmoreBnt = styled.button`
    margin-bottom: 16px;
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background-color: #070120;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        transform: scale(1.1, 1.05); /* Змінює масштаб по обох осях X і Y */
        background-color: #0d023b;
    }

    &:before {
    content: "";
    background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    }

    @keyframes glowing-button-85 {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }

    &:after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #070120;
        left: 0;
        top: 0;
        border-radius: 10px;
        &:hover,
        &:focus {
            background-color: #0d023b;
        }
    }
`