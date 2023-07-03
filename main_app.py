import bardapi.core


def main():
    if __name__ == '__main__':
        main()
from bardapi import Bard

import streamlit as st
from streamlit_chat import message
import os

token=st.secrets.BARD_API_KEY.Token
st.title("A.I.D.A")
st.markdown("---")
st.subheader("Hey Buddy! I am A.I.D.A your anytime companion.Please feel free to share or ask me anything")



def generated_response (prompt):
    bard = Bard(token=token)
    response = bard.get_answer(prompt)['content']
    return response

def input ():
    input_text=st.text_input("","Hey A.I.D.A I want to talk to you.",key='Input')
    return input_text


if 'generated' not in  st.session_state:
    st.session_state['generated'] = []

if 'past' not in st.session_state:
    st.session_state['past'] = []

user_input = input()

if user_input:
    print(user_input)
    output = generated_response(user_input)
    print(output)
    st.session_state['past'].append(user_input)
    st.session_state['generated'].append(output)

if st.session_state['generated']:
    for i in range(len(st.session_state['generated'])-1,-1,-1):
        message(st.session_state['generated'][i], key= str(i))
        message(st.session_state['past'][i], key="user"+str(i),is_user=True)


st.markdown("---")

st.markdown("[Click here to get a professional Counsellor](https://pib.gov.in/PressReleasePage.aspx?PRID=1652240)")











st.markdown("Made by Rounak with Love :heart:")
