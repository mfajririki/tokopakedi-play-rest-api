# Tokopakedi Play REST API

Tokopakedi Play is a clone from [Tokopedia Play](https://www.tokopedia.com/play/channels). This repository countains the source code and examples for building a RESTful API from scratch. Leverage the popular Node.js framework, Express.js, to create a lightweight and scalable API server. This API follows the RESTful principles, allowing clients to interact with resources through standard HTTP methods like GET, POST, PUT, and DELETE.

## Installation

1. Make sure [node.js](https://nodejs.org/en) and [MongoDB](https://www.mongodb.com/) is already installed.

2. Clone the repository by running the below code on your terminal

```bash
git clone https://github.com/mfajririki/tokopakedi-play-rest-api.git
```

3. Open the project directory or

```bash
cd tokopakedi-play-rest-api
```

4. Use the package manager `npm` to install

```bash
npm install
```

5. Run the project

```bash
npm start
```

6. The result below means the project is running successfully

```bash
[nodemon] starting `node index.js`
Server started at 3000
Database Connected
```

7. Access the API at `http://localhost:3000/api`.
   Run the endpoints below with [Postman](https://www.postman.com/)

#Video

<ul>
    <li>Video object</li>
</ul>

```javascript
{
    _id: ObjectId,
    title: String,
    author: String,
    imgUrl: String,
    createdAt: datetime(iso 8601),
    updateAt: datetime(iso 8601)
}
```

## GET /api/v1/videos

Return all videos in the system

<ul>
    <li>URL Params<br>None</li>
    <li>Headers<br>Content-Type: application/json</li>
    <li>Data Params<br>None</li>
    <li>Success Response<br>
        <ul>
            <li>Code: 200<br>Content:</li>
        </ul>
    </li>
</ul>

```javascript
[
    {<video_object>},
    {<video_object>},
    {<video_object>},
]
```

## POST /api/v1/videos

Creates a new Video and returns the new object.

<ul>
    <li>URL Params<br>None</li>
    <li>Headers<br>Content-Type: application/json</li>
    <li>Data Params</li>
</ul>

```javascript
{
    title: String,
    author: String,
    imgUrl: String
}
```

<ul>
    <li>Success Response<br>
        <ul>
            <li>Code: 200<br>Content: <code>{ &lt;video_object&gt; }</code></li>
        </ul>
    </li>
    <li>Error Response<br>
        <ul>
            <li>Code: 500<br>Content: <code>{ error : error }</code></li>
        </ul>
    </li>
</ul>

#Product

<ul>
    <li>Product object</li>
</ul>

```javascript
{
    _id: ObjectId,
    title: String,
    price: Number,
    productUrl: String,
    videoId: String,
    createdAt: datetime(iso 8601),
    updateAt: datetime(iso 8601)
}
```

## GET /api/v1/products/:videoId

Returns all specified products by Video's id

<ul>
    <li>URL Params<br><i>Required: <code>videoId=[String]</code></i></li>
    <li>Headers<br>Content-Type: application/json</li>
    <li>Data Params<br>None</li>
    <li>Success Response<br>
        <ul>
            <li>Code: 200<br>Content:</li>
        </ul>
    </li>
</ul>

```javascript
[
    {<video_object>},
    {<video_object>},
    {<video_object>},
]
```

<ul>
    <li>Error Response<br>
        <ul>
            <li>Code: 500<br>Content: <code>{ error : error }</code></li>
        </ul>
    </li>
</ul>

## POST /api/v1/products

Creates a new Product and returns the new object

<ul>
    <li><strong>URL Params</strong><br>None</li>
    <li>Headers<br>Content-Type: application/json</li>
    <li>Data Params<br>None</li>
</ul>

```javascript
{
    title: String,
    price: Number,
    productUrl: String,
    videoId: String
}
```

<ul>
    <li>Success Response<br>
        <ul>
            <li>Code: 200<br>Content: <code>{ &lt;product_object&gt; }</code></li>
        </ul>
    </li>
    <li>Error Response<br>
        <ul>
            <li>Code: 500<br>Content: <code>{ error : error }</code></li>
        </ul>
    </li>
</ul>

#Comment

<ul>
    <li>Comment object</li>
</ul>

```javascript
{
    _id: ObjectId,
    username: String,
    comment: String,
    videoId: String,
    createdAt: datetime(iso 8601),
    updateAt: datetime(iso 8601)
}
```

## GET /api/v1/comments/:videoId

Returns all specified products by Video's id

<ul>
    <li>URL Params<br><i>Required: <code>videoId=[String]</code></i></li>
    <li>Headers<br>Content-Type: application/json</li>
    <li>Data Params<br>None</li>
    <li>Success Response<br>
        <ul>
            <li>Code: 200<br>Content:</li>
        </ul>
    </li>
</ul>

```javascript
[
    {<comment_object>},
    {<comment_object>},
    {<comment_object>},
]
```

<ul>
    <li>Error Response<br>
        <ul>
            <li>Code: 500<br>Content: <code>{ error : error }</code></li>
        </ul>
    </li>
</ul>

## POST /api/v1/comments

Creates a new Comment and returns the new object

<ul>
    <li><strong>URL Params</strong><br>None</li>
    <li>Headers<br>Content-Type: application/json</li>
    <li>Data Params<br>None</li>
</ul>

```javascript
{
    username: String,
    comment: String,
    videoId: String
}
```

<ul>
    <li>Success Response<br>
        <ul>
            <li>Code: 200<br>Content: <code>{ &lt;comment_object&gt; }</code></li>
        </ul>
    </li>
    <li>Error Response<br>
        <ul>
            <li>Code: 500<br>Content: <code>{ error : error }</code></li>
        </ul>
    </li>
</ul>
