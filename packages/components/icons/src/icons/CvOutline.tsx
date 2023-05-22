import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CvOutline = React.forwardRef(
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
          '<path d="M8.22118 9.50405H11.0459C11.5894 9.50405 12.0341 9.06645 12.0341 8.5316 12.0341 7.99676 11.5894 7.55916 11.0459 7.55916H8.22118C7.67765 7.55916 7.23294 7.99676 7.23294 8.5316 7.23294 9.06645 7.67765 9.50405 8.22118 9.50405ZM8.22118 13.6694H15.2788C15.8224 13.6694 16.2671 13.2318 16.2671 12.6969 16.2671 12.1621 15.8224 11.7245 15.2788 11.7245H8.22118C7.67765 11.7245 7.23294 12.1621 7.23294 12.6969 7.23294 13.2318 7.67765 13.6694 8.22118 13.6694Z"/><path d="M20.22 9.22853L13.1541 2.28363C12.9729 2.09724 12.7176 2 12.4541 2H5.39647C4.76235 2 4.15294 2.25122 3.7 2.68882C3.24706 3.12642 3 3.7342 3 4.35818V19.6418C3 20.2658 3.25529 20.8655 3.7 21.3112C4.15294 21.7569 4.76235 22 5.39647 22H18.1035C18.7376 22 19.3471 21.7488 19.8 21.3112C20.2529 20.8736 20.5 20.2658 20.5 19.6418V9.91734C20.5 9.65802 20.3929 9.41491 20.2118 9.22853H20.22ZM4.97647 4.35818C4.97647 4.24473 5.01765 4.13938 5.1 4.06645C5.18235 3.99352 5.28941 3.94489 5.39647 3.94489H12.0424L18.5235 10.3225V19.6418C18.5235 19.7553 18.4824 19.8606 18.4 19.9335C18.3176 20.0065 18.2106 20.0551 18.1035 20.0551H5.39647C5.28118 20.0551 5.17412 20.0146 5.1 19.9335C5.01765 19.8525 4.97647 19.7472 4.97647 19.6418V4.35818Z"/><path d="M8.22118 17.8347H15.2788C15.8224 17.8347 16.2671 17.3971 16.2671 16.8622C16.2671 16.3274 15.8224 15.8898 15.2788 15.8898H8.22118C7.67765 15.8898 7.23294 16.3274 7.23294 16.8622C7.23294 17.3971 7.67765 17.8347 8.22118 17.8347Z"/>',
      }}
    />
  )
)

CvOutline.displayName = 'CvOutline'

export const tags = ['CvOutline', '']
