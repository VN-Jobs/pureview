@props(['active'])

@php
$classes = ($active ?? false)
            ? 'nav__item is--active'
            : 'nav__item';
@endphp
<li {{ $attributes->merge(['class' => $classes]) }}>
    {{ $slot }}
</li>
