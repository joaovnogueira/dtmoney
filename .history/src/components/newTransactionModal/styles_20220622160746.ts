import styled from 'styled-components'

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--green);
        color:#FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button{
        height: 4rem;

        width: 100%;
        padding: 0 1.5rem;
        background-color: #F0F2F5;
        color: var(--text-title);
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            filter: brightness(0.9);
        }
    }
`
