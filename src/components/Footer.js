
import React from "react";
import styled from "styled-components"

export default function Footer () {
    return(
            <Wrapper>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Subscribe Now &</h3>
                            <h3>Connect With Us</h3>
                        </div>
                        <div className="grid grid-two-column">
                            <button>Get Started</button>
                        </div>
                    </div>
                </section>
            </Wrapper>
    );
}


const Wrapper = styled.section`
    .contact-short {
        max-width: 80vw;
        margin: auto;
        padding: 5rem 5rem;
        background-color: black;
        color: white;
        border-radious: 1rem;
        // transform: translateY(50%);

        .grid div:last-child {
            justify-self: end;
            align-self: center;
        }
    }
`;