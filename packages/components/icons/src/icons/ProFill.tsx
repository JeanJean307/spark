import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ProFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2869 11.5483H19.2469V10.7375C19.2469 10.4608 19.0228 10.2366 18.7469 10.2366H18.4069C18.1302 10.2366 17.9061 10.4608 17.9061 10.7375V11.5483H16.8669C16.5894 11.5483 16.3636 11.7741 16.3636 12.0516V20.9525C18.2411 20.0383 19.7961 18.565 20.7902 16.7366V12.0516C20.7902 11.7741 20.5636 11.5483 20.2869 11.5483ZM14.0747 10.82H9.90808C9.67808 10.82 9.49142 10.6333 9.49142 10.4033 9.49142 10.1733 9.67808 9.98664 9.90808 9.98664H14.0747C14.3047 9.98664 14.4914 10.1733 14.4914 10.4033 14.4914 10.6333 14.3047 10.82 14.0747 10.82ZM14.0747 12.8316H9.90808C9.67808 12.8316 9.49142 12.645 9.49142 12.415 9.49142 12.185 9.67808 11.9983 9.90808 11.9983H14.0747C14.3047 11.9983 14.4914 12.185 14.4914 12.415 14.4914 12.645 14.3047 12.8316 14.0747 12.8316ZM14.0747 14.8433H9.90808C9.67808 14.8433 9.49142 14.6566 9.49142 14.4266 9.49142 14.1966 9.67808 14.01 9.90808 14.01H14.0747C14.3047 14.01 14.4914 14.1966 14.4914 14.4266 14.4914 14.6566 14.3047 14.8433 14.0747 14.8433ZM14.0747 16.855H9.90808C9.67808 16.855 9.49142 16.6691 9.49142 16.4383 9.49142 16.2083 9.67808 16.0216 9.90808 16.0216H14.0747C14.3047 16.0216 14.4914 16.2083 14.4914 16.4383 14.4914 16.6691 14.3047 16.855 14.0747 16.855ZM14.0747 18.8666H9.90808C9.67808 18.8666 9.49142 18.6808 9.49142 18.45 9.49142 18.22 9.67808 18.0333 9.90808 18.0333H14.0747C14.3047 18.0333 14.4914 18.22 14.4914 18.45 14.4914 18.6808 14.3047 18.8666 14.0747 18.8666ZM15.1764 8.39247H14.3381V6.87664C14.3381 6.60247 14.1164 6.38081 13.8423 6.38081H12.6623V4.86914C12.6623 4.59247 12.4381 4.36914 12.1614 4.36914H11.8214C11.5447 4.36914 11.3206 4.59247 11.3206 4.86914V6.38081H10.1406C9.86642 6.38081 9.64475 6.60247 9.64475 6.87664V8.39247H8.80642C8.52808 8.39247 8.30308 8.61664 8.30308 8.89497V21.2508C9.44725 21.7066 10.6923 21.965 11.9989 21.965H12.0006C13.3014 21.965 14.5398 21.7083 15.6798 21.2566V8.89497C15.6798 8.61664 15.4548 8.39247 15.1764 8.39247ZM7.13308 11.5483H6.09392V10.7375C6.09392 10.4608 5.86975 10.2366 5.59308 10.2366H5.25308C4.97725 10.2366 4.75308 10.4608 4.75308 10.7375V11.5483H3.71308C3.43642 11.5483 3.20975 11.7741 3.20975 12.0516V16.7366C4.20392 18.565 5.75892 20.0383 7.63642 20.9525V12.0516C7.63642 11.7741 7.41058 11.5483 7.13308 11.5483Z"/>',
      }}
    />
  )
)

ProFill.displayName = 'ProFill'

export const tags = ['ProFill', '']
