import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const VoiceOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 4.80005C11.3408 4.80005 10.7086 5.05939 10.2425 5.52102C9.77635 5.98264 9.5145 6.60874 9.5145 7.26158V12.1077C9.5145 12.7606 9.77635 13.3867 10.2425 13.8483C10.7086 14.3099 11.3408 14.5693 11.9999 14.5693C12.6591 14.5693 13.2913 14.3099 13.7574 13.8483C14.2235 13.3867 14.4854 12.7606 14.4854 12.1077V7.26158C14.4854 6.60874 14.2235 5.98264 13.7574 5.52102C13.2913 5.05939 12.6591 4.80005 11.9999 4.80005ZM8.81452 4.1068C9.65934 3.2701 10.8052 2.80005 11.9999 2.80005C13.1947 2.80005 14.3405 3.2701 15.1853 4.1068C16.0302 4.9435 16.5048 6.07831 16.5048 7.26158V12.1077C16.5048 13.291 16.0302 14.4258 15.1853 15.2625C14.3405 16.0992 13.1947 16.5693 11.9999 16.5693C10.8052 16.5693 9.65934 16.0992 8.81452 15.2625C7.9697 14.4258 7.49508 13.291 7.49508 12.1077V7.26158C7.49508 6.07831 7.9697 4.9435 8.81452 4.1068ZM5.01198 11.8C5.56962 11.8012 6.02067 12.25 6.01943 12.8022C6.01788 13.4893 6.15338 14.1699 6.41814 14.8049C6.6829 15.44 7.07171 16.017 7.56225 16.5028C8.05278 16.9886 8.63538 17.3737 9.27659 17.6359C9.91781 17.8981 10.605 18.0323 11.2987 18.0308L11.301 18.0308L12.699 18.0308L12.7013 18.0308C13.395 18.0323 14.0822 17.8981 14.7234 17.6359C15.3646 17.3737 15.9472 16.9886 16.4377 16.5028C16.9283 16.017 17.3171 15.44 17.5819 14.8049C17.8466 14.1699 17.9821 13.4893 17.9806 12.8022C17.9793 12.25 18.4304 11.8012 18.988 11.8C19.5457 11.7988 19.9987 12.2455 20 12.7978C20.0021 13.7482 19.8147 14.6897 19.4484 15.5682C19.0822 16.4467 18.5443 17.2449 17.8657 17.917C17.1871 18.5891 16.3812 19.1218 15.4941 19.4845C14.7036 19.8078 13.8625 19.9904 13.0096 20.0248V21.8C13.0096 22.3523 12.5575 22.8 11.9999 22.8C11.4422 22.8 10.9902 22.3523 10.9902 21.8V20.0248C10.1373 19.9904 9.29633 19.8077 8.50588 19.4845C7.61885 19.1218 6.8129 18.5891 6.13431 17.917C5.45571 17.2449 4.91785 16.4467 4.55158 15.5682C4.18532 14.6897 3.99788 13.7482 4.00002 12.7978C4.00126 12.2455 4.45433 11.7988 5.01198 11.8Z"/>',
      }}
    />
  )
)

VoiceOutline.displayName = 'VoiceOutline'

export const tags = ['voice-outline', 'contact']
