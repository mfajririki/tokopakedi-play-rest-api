# Tokopakedi Play REST API

Tokopakedi Play is a clone from Tokopedia Play.

#Video

<ul>
    <li>Video object</li>
</ul>

```javascript
{
    _id: ObjectId,
    title: String,
    author: String,
    imgUrl: String
    createdAt: datetime(iso 8601)
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
    createdAt: datetime(iso 8601)
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

## POST /products

Creates a new Product and returns the new object

<ul>
    <li><strong>URL Params</strong><br>None</li>
    <li>Headers<br>Content-Type: application/json</li>
    <li>Data Params<br>None</li>
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
