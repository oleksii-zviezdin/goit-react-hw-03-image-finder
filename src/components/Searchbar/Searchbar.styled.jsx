import styled from "@emotion/styled";

export const SearchbarCSS = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background: linear-gradient(-45deg, rgb(7, 0, 59), rgb(14, 0, 92));
    &:hover,
    &:focus{box-shadow: 0px 4px 12px 8px  rgb(36, 10, 162)}
`

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    outline: 2px solid #3430ff;
    
    box-shadow: 0 0 10px 2px #2f00ff;

    &:before {
    content: "";
    background: linear-gradient(
        45deg,
        #001aff,
        #003bfb,
        #0c24ff,
        #fffb00,
        #fffb00,
        #fffb00,
        #001aff,
        #001aff,
        #001aff
    );
    position: absolute;
    top: 2px;
    left: 0px;
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
    }
`

export const SearchFormButton = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: none;
    background-image: url('https://img.icons8.com/search');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #4c419e;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover,
    &:focus {
        opacity: 1;
        /* background: linear-gradient(to top left,#6f00d0, #ca0248); */
    }
`

export const SearchFormButtonLabel = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
`

export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;

    &::placeholder {
        font: inherit;
        font-size: 18px;
    }
`