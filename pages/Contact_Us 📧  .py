import streamlit as st

st.markdown("<h1 style='text-align: center;'>Contact Us</h1>",unsafe_allow_html=True)

# First method for form creation
# form=sl.form("Form 1")
# form.text_input("First Name")
# form.form_submit_button("Submit")
#if we use column widget outside of this keyword with it will divide our whole website into two columns
with st.form("Contact Us",clear_on_submit=True):
    col1,col2=st.columns(2)
    f_name=col1.text_input("First Name")
    l_name=col2.text_input("Last Name")
    email_add=st.text_input("Email Address")
    input=st.text_input("Leave Us a comment :smile:")
    day, month, year = st.columns(3)
    form_state=st.form_submit_button("Submit")

    if form_state:
        if (f_name == " " and l_name == " ") and (email_add==" "):
           st.warning("Please fill above fields")

        else:
            st.success("Form Submitted Successfully")
