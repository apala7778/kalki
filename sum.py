import streamlit as st
import openai
from PyPDF2 import PdfReader
import io

# Set your OpenAI API key
api_key = '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'

# Function to extract text from a PDF file
def extract_text_from_pdf(file):
    pdf_reader = PdfReader(file)
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

# Function to generate plain language legal text
def generate_legal_text(prompt):
    openai.api_key = api_key
    
    response = openai.Completion.create(
        engine="text-davinci-002",  # You can choose another engine if needed
        prompt=prompt,
        max_tokens=200,  # Adjust the number of tokens as needed
        temperature=0.7,  # Adjust temperature for randomness vs. determinism
        top_p=1.0,  # Adjust top_p for diversity of output
        frequency_penalty=0.0,  # Adjust to control word repetition
        presence_penalty=0.0  # Adjust to control response length
    )
    
    return response.choices[0].text

# Streamlit app
def main():
    st.title("Plain Language Legal Document Generator")
    
    # User input: Upload PDF file
    uploaded_file = st.file_uploader("Upload a PDF file", type=["pdf"])
    
    # User input: Text prompt
    prompt = st.text_area("Enter your legal document request:")
    
    if st.button("Generate"):
        if not prompt:
            st.warning("Please enter a legal document request.")
        elif uploaded_file is None:
            st.warning("Please upload a PDF file.")
        else:
            # Extract text from the uploaded PDF file
            pdf_text = extract_text_from_pdf(uploaded_file)
            
            st.subheader("Plain Language Legal Text:")
            
            # Combine the extracted PDF text and user's input prompt
            combined_text = f"{prompt}\n\n{pdf_text}"
            
            # Generate plain language legal text
            plain_language_legal_text = generate_legal_text(combined_text)
            
            st.write(plain_language_legal_text)

if __name__ == '__main__':
    main()
