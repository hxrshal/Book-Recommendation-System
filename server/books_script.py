# import sys
# import pickle
# import streamlit as st
# import numpy as np
# import json


# books_name = pickle.load(open('ml_files/books_name.pkl', 'rb'))

# if __name__ == "__main__":
#     print(json.dumps(books_name))

# 

"""
Handles the loading of the books_name.pkl file and converts it to a serializable format
"""

import sys
import pickle
import json
import pandas as pd

def convert_to_serializable(obj):
    if isinstance(obj, pd.Index):
        return obj.tolist()
    elif isinstance(obj, pd.Series):
        return obj.to_dict()
    elif isinstance(obj, pd.DataFrame):
        return obj.to_dict(orient='records')
    # Add more type checks and conversions as needed
    return obj

def load_books_names(file_path):
    try:
        with open(file_path, 'rb') as file:
            books_name = pickle.load(file)
        return books_name
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}", file=sys.stderr)
        return None
    except pickle.UnpicklingError:
        print("Error: The file could not be unpickled", file=sys.stderr)
        return None
    except Exception as e:
        print(f"An error occurred: {e}", file=sys.stderr)
        return None

if __name__ == "__main__":
    books_name = load_books_names('ml_files/books_name.pkl')
    
    if books_name is not None:
        try:
            # Convert to serializable format if needed
            books_name_serializable = convert_to_serializable(books_name)
            # Print the books_name in JSON format to the console
            print(json.dumps(books_name_serializable))
        except TypeError as e:
            print(f"Error serializing to JSON: {e}", file=sys.stderr)
