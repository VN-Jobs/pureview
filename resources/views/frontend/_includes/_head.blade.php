<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="generator" content="">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-touch-fullscreen" content="yes">
<meta name="description" content="{{ isset($description) ? $description : ($configs['description'][0] ?? null) }}">
<meta name="author" content="">
<meta name="keywords" content="{{ isset($keywords) ? $keywords : ($configs['keywords'][0] ?? null) }}">
<meta name="csrf-token" content="{{ csrf_token() }}">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="canonical" href="">

<title>@yield('title')</title>

<meta property="og:url" content="{{ Request::url() }}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{{ isset($heading) ? $heading : ($configs['name'][0] ?? null) }}">
<meta property="og:title" content="{{ isset($heading) ? $heading : ($configs['name'][0] ?? null) }}">
<meta property="og:description" content="{{ isset($description) ? $description : ($configs['description'][0] ?? null) }}">
{{-- <meta property="og:image" content="{{ isset($image) ? $image : null) }}"> --}}
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="300">
<meta property="og:image:height" content="300">
{{-- <meta property="fb:app_id" content="{{ isset($fb_id) ? $fb_id : null) }}"> --}}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="{{ isset($heading) ? $heading : ($configs['name'][0] ?? null) }}">
<meta name="twitter:title" content="{{ isset($heading) ? $heading : ($configs['name'][0] ?? null) }}">
<meta name="twitter:description" content="{{ isset($description) ? $description : ($configs['description'][0] ?? null) }}">
{{-- <meta name="twitter:image" content="{{ isset($image) ? $image : null) }}"> --}}
