import React from 'react';
import Styled from '@emotion/styled';
import Field from '../components/form/Field';
import Input from '../components/form/Input';
import Button from '../components/Button';

function LoginPage() {
    return (
        <LoginPageStyled>
            <form>
                <h2>Login</h2>
                <div className="social-login">
                    <Button className="social-login-btn">
                        <i className="google-icon"></i>
                        <span>Google</span>
                    </Button>
                    <Button className="social-login-btn">
                        <img
                            className="github-icon"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
                        />
                        <span>Github</span>
                    </Button>
                </div>
                <Field>
                    <label htmlFor="name">Name</label>
                    <Input placeholder="Name" name="name" type="text" />
                </Field>
                <Field>
                    <label htmlFor="email">Email</label>
                    <Input placeholder="Email" name="email" type="email" />
                </Field>
                <Field>
                    <label htmlFor="password">Password</label>
                    <Input placeholder="Password" name="password" type="password" />
                </Field>
                <Button className="signup-btn">Sign Up</Button>
                <p className="message">Alreaady have an account? login here</p>
            </form>
        </LoginPageStyled>
    );
}

const LoginPageStyled = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;

    .social-login{
        display:flex;
        margin-bottom:1rem;
        justify-content:space-between;

        .social-login-btn{
            width:49%;
            border-radius:.3rem;
            background-color:#fff;
            color:#000;
            border: 1px solid #eee;
            display:flex;
            justify-content: space-around;
            align-items:center;

            .google-icon{
                width: 16px;
                display: flex;
                height: 17px;
                background-size: contain;
                background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nMTYnIGhlaWdodD0nMTcnIHZpZXdCb3g9JzAgMCAxNiAxNyc+PGRlZnM+PHBhdGggaWQ9J2EnIGQ9J00wIC4wNDJWMTYuMzVoMTUuOTgyVi4wNEgweicvPjxwYXRoIGlkPSdjJyBkPSdNMTIuNzc2LjA0MUguMDM3djYuNTdoMTIuNzRWLjA0MXonLz48L2RlZnM+PGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwIC4wMDMpJz48bWFzayBpZD0nYicgZmlsbD0nI2ZmZic+PHVzZSB4bGluazpocmVmPScjYScvPjwvbWFzaz48cGF0aCBmaWxsPScjRkZGJyBkPSdNNS40OS40ODhBOC4yIDguMiAwIDAgMCAuODcgNC41MzRhOC4wNzMgOC4wNzMgMCAwIDAtLjcxIDIuMDUxIDguMTgyIDguMTgyIDAgMCAwIC43MDYgNS4yNzMgOC4yMjcgOC4yMjcgMCAwIDAgMi4yMTQgMi43MjMgOC4xMjQgOC4xMjQgMCAwIDAgMi45NjMgMS40OTRjMS4zNTkuMzY0IDIuODA1LjM1NiA0LjE3My4wNDRhNy40IDcuNCAwIDAgMCAzLjM0LTEuNzM2Yy45ODctLjkwNyAxLjY5Mi0yLjEgMi4wNjUtMy4zODQuNDA4LTEuMzk4LjQ2LTIuODkzLjIwNi00LjMzSDguMTU2VjkuODVIMTIuNmEzLjg0IDMuODQgMCAwIDEtMS42MzEgMi41MiA0LjY3MSA0LjY3MSAwIDAgMS0xLjc5Ny43MWMtLjY0LjExLTEuMzA3LjEyMy0xLjk0Ny0uMDA0YTQuODI3IDQuODI3IDAgMCAxLTEuODE0LS43ODVBNS4wNDIgNS4wNDIgMCAwIDEgMy41NDQgOS43OWE0Ljk0OCA0Ljk0OCAwIDAgMSAwLTMuMTczQTUuMDkzIDUuMDkzIDAgMCAxIDQuNzI4IDQuNjlhNC44MzYgNC44MzYgMCAwIDEgMi40MzctMS4zNTQgNC44NjUgNC44NjUgMCAwIDEgMi4zOTQuMDk2IDQuMzkgNC4zOSAwIDAgMSAxLjc1NyAxLjAzNWwxLjUtMS41Yy4yNjMtLjI2Ny41MzktLjUyNS43OTMtLjgwMkE3Ljk1IDcuOTUgMCAwIDAgMTAuOTgzLjU0IDguMjMgOC4yMyAwIDAgMCA1LjQ5MS40ODgnIG1hc2s9J3VybCgjYiknLz48L2c+PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLjgzMyAuMDAzKSc+PG1hc2sgaWQ9J2QnIGZpbGw9JyNmZmYnPjx1c2UgeGxpbms6aHJlZj0nI2MnLz48L21hc2s+PHBhdGggZmlsbD0nI0VBNDMzNScgZD0nTTQuNjU4LjQ4OGE4LjI1NyA4LjI1NyAwIDAgMSA1LjQ5Mi4wNDhjLjk3My4zNiAxLjg2My45MiAyLjYyNiAxLjYyNi0uMjU0LjI3Ni0uNTMuNTM1LS43OTMuODAybC0xLjUgMS41YTQuNDQgNC40NCAwIDAgMC0xLjc1Ny0xLjAzNSA0LjgxNCA0LjgxNCAwIDAgMC0yLjM5NC0uMDk3Yy0uOTIuMTk4LTEuNzc1LjY4LTIuNDM3IDEuMzU1YTUuMDYgNS4wNiAwIDAgMC0xLjE4NCAxLjkyNEMxLjgyMSA1LjkyLjkzMSA1LjIzMS4wMzcgNC41MzhhOC4xOTMgOC4xOTMgMCAwIDEgNC42Mi00LjA1JyBtYXNrPSd1cmwoI2QpJy8+PC9nPjxwYXRoIGZpbGw9JyNGQkJDMDUnIGQ9J00uMTY1IDYuNTgzYy4xNDQtLjcxLjM4LTEuNDAyLjcxLTIuMDUxLjg5LjY5MiAxLjc4IDEuMzggMi42NzQgMi4wNzNhNC45MTggNC45MTggMCAwIDAgMCAzLjE3NGMtLjg5LjY5My0xLjc4IDEuMzg1LTIuNjcgMi4wNzNhOC4xMTMgOC4xMTMgMCAwIDEtLjcxNC01LjI2OScvPjxwYXRoIGZpbGw9JyM0Mjg1RjQnIGQ9J004LjE1NiA2LjY2N2g3LjY3MWE5LjY0MyA5LjY0MyAwIDAgMS0uMjA2IDQuMzNjLS4zNzMgMS4yODUtMS4wNzggMi40NzctMi4wNjUgMy4zODVsLTIuNTktMi4wMTJhMy44NCAzLjg0IDAgMCAwIDEuNjMtMi41MjFIOC4xNTFjLjAwNS0xLjA2LjAwNS0yLjEyMi4wMDUtMy4xODInLz48cGF0aCBmaWxsPScjMzRBODUzJyBkPSdNLjg3IDExLjg1N2MuODktLjY4OSAxLjc4LTEuMzgxIDIuNjctMi4wNzRhNS4wNjcgNS4wNjcgMCAwIDAgMS44NjcgMi41MDMgNC44NTcgNC44NTcgMCAwIDAgMS44MTUuNzg1Yy42NC4xMzEgMS4zMDIuMTE0IDEuOTQ2LjAwNGE0LjY3IDQuNjcgMCAwIDAgMS43OTgtLjcxbDIuNTkgMi4wMTJjLS45MzMuODY0LTIuMTA0IDEuNDUxLTMuMzQgMS43MzYtMS4zNjguMzExLTIuODE0LjMyLTQuMTczLS4wNDRhOC4wNTcgOC4wNTcgMCAwIDEtMi45NjMtMS40OTQgOC4yMDkgOC4yMDkgMCAwIDEtMi4yMS0yLjcxOCcvPjwvZz48L3N2Zz4K') center no-repeat;
            }
            .github-icon{
                width: 17px;
                height: 17px;
            }
            &:hover{
                background-color:#eee;
            }
        }
    }

    label{
        color:#666;
        font-size:.9rem;
    }
    .signup-btn{
        width:100%;
    }

    h2{
        font-size:2rem;
        text-align:center;
    }

    form{
        width:380px;
        padding:1rem 1.5rem;
        border-radius:1rem;
        background-color:#fff;

        .message{
            font-size:.9rem;
            margin-top:.75rem;
            display:block;
            color:#666;
            text-align:center;
        }
    }
`;

export default LoginPage;
