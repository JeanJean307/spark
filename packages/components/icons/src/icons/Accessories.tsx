import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Accessories = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.60993 5.19995C9.00395 5.19995 9.3287 5.5002 9.37308 5.88702L9.37825 5.97773V9.08884H9.93703C10.8612 9.08884 11.6177 9.82686 11.6792 10.7608L11.6832 10.8837V16.6273C11.6832 17.5454 11.0126 18.3025 10.1473 18.4093L10.1466 18.8111C10.1466 19.0258 9.97458 19.2 9.76241 19.2C9.57382 19.2 9.41697 19.0624 9.38444 18.881L9.37825 18.8111V18.4222H6.30496V18.8111C6.30496 19.0258 6.13297 19.2 5.9208 19.2C5.73221 19.2 5.57536 19.0624 5.54283 18.881L5.53664 18.8111L5.53665 18.4094C4.71227 18.3081 4.06435 17.6163 4.00451 16.7574L4 16.6273V10.8837C4 9.93374 4.718 9.15613 5.62663 9.09298L5.74619 9.08884H6.30496V5.97773C6.30496 5.57886 6.60157 5.25011 6.98368 5.20518L7.07329 5.19995H8.60993ZM9.89046 9.86662H5.79275C5.26025 9.86662 4.82265 10.2872 4.77301 10.8251L4.76832 10.9272V16.5838C4.76832 17.1351 5.1746 17.5881 5.69409 17.6395L5.79275 17.6444H9.89046C10.423 17.6444 10.8606 17.2238 10.9102 16.6859L10.9149 16.5838V10.9272C10.9149 10.3415 10.4562 9.86662 9.89046 9.86662ZM8.99409 12.9777C9.59315 12.9777 10.0855 13.4404 10.1413 14.032L10.1466 14.1444V15.7C10.1466 16.3064 9.68951 16.8047 9.10508 16.8613L8.99409 16.8666H6.68913C6.09007 16.8666 5.59776 16.4039 5.54192 15.8123L5.53664 15.7V14.1444C5.53664 13.538 5.99371 13.0396 6.57813 12.9831L6.68913 12.9777H8.99409ZM17.0615 12.9777C17.5218 12.9777 17.9192 13.251 18.1038 13.646L20.5288 13.0733C20.6597 13.0448 20.7959 13.0859 20.89 13.1822C20.9824 13.2822 21.0199 13.422 20.9898 13.5556L20.6748 14.7145L20.9591 16.06C20.9849 16.1756 20.9572 16.2967 20.8839 16.3891C20.8106 16.4815 20.6997 16.535 20.5826 16.5345H20.6134C20.5753 16.5418 20.5362 16.5418 20.4981 16.5345L18.0472 15.7567C18.0027 15.743 17.9617 15.7212 17.9257 15.693C17.7152 15.9358 17.406 16.0888 17.0615 16.0888C16.7223 16.0888 16.4174 15.9406 16.2065 15.7045L16.1725 15.7178L13.7215 16.4956C13.686 16.5162 13.6469 16.5294 13.6063 16.5345C13.4892 16.535 13.3783 16.4815 13.305 16.3891C13.2317 16.2967 13.204 16.1756 13.2298 16.06L13.5218 14.7145L13.2298 13.4544C13.1998 13.3237 13.2386 13.1865 13.3324 13.0916C13.4261 12.9967 13.5616 12.9575 13.6908 12.9878L16.0701 13.5491C16.271 13.207 16.6398 12.9777 17.0615 12.9777ZM8.99409 13.7555H6.68913C6.50053 13.7555 6.34368 13.8931 6.31115 14.0745L6.30496 14.1444V15.7C6.30496 15.8909 6.44086 16.0496 6.62007 16.0826L6.68913 16.0888H8.99409C9.18268 16.0888 9.33953 15.9513 9.37206 15.7699L9.37825 15.7V14.1444C9.37825 13.9296 9.20626 13.7555 8.99409 13.7555ZM20.0832 13.9989L18.2139 14.4384V14.9222C18.2139 14.949 18.2131 14.9757 18.2113 15.0021C18.2352 15.0041 18.2604 15.0096 18.2853 15.0178L20.0909 15.6167L19.9065 14.8389C19.8912 14.7776 19.8912 14.7135 19.9065 14.6522L20.0832 13.9989ZM14.121 13.9367L14.2901 14.6756C14.3055 14.7315 14.3055 14.7907 14.2901 14.8467L14.1287 15.5778L15.9113 14.9852L15.909 14.9222V14.3326L14.121 13.9367ZM17.0615 13.7555C16.8729 13.7555 16.716 13.8931 16.6835 14.0745L16.6773 14.1444V14.9222C16.6773 15.137 16.8493 15.3111 17.0615 15.3111C17.2501 15.3111 17.4069 15.1735 17.4394 14.9921L17.4456 14.9222V14.1444C17.4456 13.9296 17.2736 13.7555 17.0615 13.7555ZM17.0615 5.19995C17.4858 5.19995 17.8298 5.54817 17.8298 5.97773C17.8298 6.00656 17.8282 6.03502 17.8252 6.06304C19.1463 6.36137 20.1348 7.41901 20.1348 8.69995C20.1348 8.85078 20.121 8.99851 20.0947 9.14227C20.5626 9.28922 20.9031 9.73211 20.9031 10.2555C20.9031 10.8619 20.446 11.3603 19.8616 11.4168L19.7506 11.4222H14.3723C13.7358 11.4222 13.2199 10.8998 13.2199 10.2555C13.2199 9.73211 13.5603 9.28922 14.0293 9.1414C14.0019 8.99851 13.9882 8.85078 13.9882 8.69995C13.9882 7.41901 14.9766 6.36137 16.2981 6.06238L16.2931 5.97773C16.2931 5.54817 16.6371 5.19995 17.0615 5.19995ZM19.7506 9.86662H14.3723C14.1602 9.86662 13.9882 10.0407 13.9882 10.2555C13.9882 10.4464 14.1241 10.6052 14.3033 10.6381L14.3723 10.6444H19.7506C19.9628 10.6444 20.1348 10.4703 20.1348 10.2555C20.1348 10.0407 19.9628 9.86662 19.7506 9.86662ZM17.0615 6.75551C15.7765 6.75551 14.7565 7.64051 14.7565 8.69995C14.7565 8.83307 14.7726 8.96344 14.8033 9.08964H19.3196C19.3503 8.96344 19.3664 8.83307 19.3664 8.69995C19.3664 7.64051 18.3465 6.75551 17.0615 6.75551ZM8.60993 5.97773H7.07329V9.08884H8.60993V5.97773Z"/>',
      }}
    />
  )
)

Accessories.displayName = 'Accessories'

export const tags = ['accessories', 'criteria', 'holidays']
