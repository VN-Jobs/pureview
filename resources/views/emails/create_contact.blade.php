@extends('layouts.email')

@section('main')
    <div>
        [Pureviewie] - Thông tin người dùng liên hệ<br>
        <br>
        <br>
        <br>
        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝<br>
        <strong>Tên người dùng:</strong> {{ $name }}<br>
        <strong>Email:</strong> {{ $email }}<br>
        <strong>Phone:</strong> {{ $phone }}<br>
        <strong>Company:</strong> {{ $company }}<br>
        <strong>Thông điệp:</strong> {{ $content }}<br>

        ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝<br>
        <br>
        <br>
        info@pureviewie.com<br>
        (+84) 36 681 1991‬<br>
        Lô CC6 - Khu đô thị Linh Đàm, Hoàng Liệt, Hoàng Mai, Hà Nội, 100000<br>
    </div>
@stop
