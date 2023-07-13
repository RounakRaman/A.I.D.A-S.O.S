import bardapi.core
from dotenv import load_dotenv

load_dotenv()



from bardapi import Bard

import streamlit as st
from streamlit_chat import message
import os
import streamlit.components.v1 as com


token=os.getenv('BARD_API_KEY')

Token=token

st.title("A.I.D.A")

st.markdown("---")

st.subheader("Hey Buddy! :wave: I am A.I.D.A your anytime companion.")

#I am A.I.D.A your anytime companion.Please feel free to share anything. :smile:

st.markdown("""
<style>
.css-erpbzb.e1ewe7hr3
{
visibility:hidden;
}
.css-erpbzb.e1ewe7hr3
{
visibility:hidden;
}
.css-cio0dv.e1g8pov61
{
visibility:hidden;
}
</style>
""",unsafe_allow_html=True) #removing hamburger on streamlit page

st.markdown("""
<style>
.main.css-uf99v8.e1g8pov65
{
background-image: url("https://images.unsplash.com/photo-1542281286-9e0a16bb7366");
background-size: cover;
}
</style>""",unsafe_allow_html=True)




def generated_response (prompt):
    response = Bard(token=Token).get_answer(prompt)['content']
    return response

def input ():
    input_text=st.text_input(" ","Hey A.I.D.A I want to talk to you.",key='Input')
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

def change_in_state():
    state=False

state=st.checkbox(label="Need professional help?",value=False)

if state:
    st.write("[Click here to get a Professonial Counsellor](https://pib.gov.in/PressReleasePage.aspx?PRID=1652240)")
else:
    pass

# st.markdown("[Click here to get a professional Counsellor](https://pib.gov.in/PressReleasePage.aspx?PRID=1652240)")

# def on_click():
    # st.write(" Rounak with Love :heart:")

# st.button(label="Made By",on_click=on_click)

st.caption("Made By Rounak with Love :heart:")







