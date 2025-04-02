"""
Handles the loading of the model.pkl, books_name.pkl, final_rating_with_books.pkl, and book_pivot.pkl files and converts them to a serializable format
"""

import sys
import pickle
import streamlit as st
import numpy as np
import json

model = pickle.load(open('ml_files/model.pkl', 'rb'))
books_name = pickle.load(open('ml_files/books_name.pkl', 'rb'))
final_rating = pickle.load(open('ml_files/final_rating_with_books.pkl', 'rb'))
book_pivot = pickle.load(open('ml_files/book_pivot.pkl', 'rb'))


def fetch_poster(suggestion):
    books_name = []
    ids_index = []
    poster_url = []
    
    for book_id in suggestion:
        books_name.append(book_pivot.index[book_id])
        
    for name in books_name[0]:
        ids = np.where(final_rating['title'] == name)[0][0]
        ids_index.append(ids)
        
    for idx in ids_index:
        url = final_rating.iloc[idx]['url_img']
        poster_url.append(url)
        
    return poster_url


def recommend_books(book_name):
    book_list = []
    book_id = np.where(book_pivot.index == book_name)[0][0]
    distance, suggestion = model.kneighbors(book_pivot.iloc[book_id,:].values.reshape(1,-1), n_neighbors=6)
    
    poster_url = fetch_poster(suggestion)

    for i in range(len(suggestion)):
        books = book_pivot.index[suggestion[i]]
        for j in books:
            book_list.append(j)
            
    return book_list, poster_url


if __name__ == "__main__":
    data = json.loads(sys.argv[1])
    predictions = recommend_books(data)
    print(json.dumps(predictions))