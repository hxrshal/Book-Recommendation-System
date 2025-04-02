# Book Recommendation System

![Screenshot 2025-03-17 194124](https://github.com/user-attachments/assets/a91f21fb-5b2d-4f7d-be75-8b612ba0d247)

---

## Overview

This project is an AI-integrated recommendation system that recommends books based on previous user reviews (collaborative filtering) for the user. This project can be integrated or enhanced into other or advanced projects.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [How This Works](#how-this-works)
- [Why Built](#why-this-is-built)

## Features:

- Clustering model for recommending books (NearestNeighbors algorithm)
- Real-time API built with Node JS
- Interactive frontend with React

## Tech Stack

- **Machine Learning:** NearestNeighbors
- **Backend:** Node JS, Python
- **Frontend:** React

## Installation

1. Clone Repo

```
git clone https://github.com/GeenethMedagedara/Book_Recommendation_System.git
cd book_recommendation_system
```

2. Install Dependencies

```
# Go to client directory
cd client
npm install

# Go to server directory
cd server
npm install
```

3. Run the App
```
# To run react app
cd client 
npm start

# To run flask backend
cd server
npm start
```

5. Access the frontend at
```
http://localhost:3000
```

## How This Works

>The NearestNeighbors algorithm is a fundamental approach in machine learning used for finding the closest data points in a given dataset. It is primarily used for tasks such as classification, regression, and clustering.

Multiple datasets are taken and combined to utilize the necessary features. And then a pivot table is created with the user ID, name of the books, and the rating each and every user has given to the books. And then the NearestNeighbor algorithm looks into the values and clusters the users with similar interests.

In the frontend, the user can select the preferred books, and then the model looks into the cluster of the selected books and recommends other books that the other users have rated higher who have rated the selected book higher as well.

## Why This is Built

I built this project as a starter for my ML journey to gain an understanding of how clustering works and how to implement clustering techniques in the real world, whereas implementing a trained model in production use.
