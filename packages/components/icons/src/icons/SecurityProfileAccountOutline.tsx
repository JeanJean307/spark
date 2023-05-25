import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SecurityProfileAccountOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.11527 6.1155C5.11527 3.84257 6.95769 2 9.23044 2C11.5032 2 13.3456 3.84257 13.3456 6.1155C13.3456 8.38843 11.5032 10.231 9.23044 10.231C6.95769 10.231 5.11527 8.38843 5.11527 6.1155ZM9.23044 4.00018C8.06227 4.00018 7.11529 4.94724 7.11529 6.1155C7.11529 7.28376 8.06227 8.23082 9.23044 8.23082C10.3986 8.23082 11.3456 7.28376 11.3456 6.1155C11.3456 4.94724 10.3986 4.00018 9.23044 4.00018Z"/><path d="M7.61792 11.1525C8.14557 11.0326 8.68331 10.9729 9.22099 10.9732C9.77328 10.9735 10.2207 11.4216 10.2204 11.9739C10.22 12.5262 9.77204 12.9737 9.21975 12.9734C8.83108 12.9731 8.44237 13.0163 8.06095 13.103C7.29424 13.2772 6.57681 13.6224 5.96231 14.1129C5.34781 14.6035 4.85213 15.2266 4.51233 15.9356C4.17253 16.6447 3.99741 17.4215 4.00005 18.2078L4.00006 18.2111L4.00005 19.288H10.6149C11.1672 19.288 11.6149 19.7357 11.6149 20.2881C11.6149 20.8404 11.1672 21.2882 10.6149 21.2882H3.00004C2.44775 21.2882 2.00004 20.8404 2.00004 20.2881V18.2127C1.99665 17.1256 2.23891 16.0516 2.70873 15.0712C3.17881 14.0903 3.86454 13.2283 4.71464 12.5497C5.56475 11.8711 6.55724 11.3934 7.61792 11.1525Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6097 10.1923C16.293 10.1923 15.9084 10.2888 15.5875 10.3857C15.2316 10.4933 14.8258 10.6422 14.4202 10.8153C13.6514 11.1435 12.721 11.627 12.1735 12.1745C12.0073 12.3407 11.8784 12.5406 11.7957 12.7607C11.7177 12.9682 11.6823 13.1891 11.6915 13.4102L11.6915 15.1998C11.6931 16.6421 12.1276 18.0507 12.9388 19.2432C13.75 20.4357 14.9005 21.3572 16.2413 21.8885C16.2507 21.8922 16.2602 21.8957 16.2696 21.8992C16.6415 22.0336 17.0486 22.0336 17.4204 21.8992C17.4299 21.8957 17.4393 21.8922 17.4487 21.8885C18.7895 21.3572 19.94 20.4357 20.7512 19.2432C21.5624 18.0507 21.9969 16.6421 21.9986 15.1998L21.9986 13.4102C22.0078 13.1891 21.9724 12.9682 21.8944 12.7607C21.8116 12.5406 21.6828 12.3407 21.5165 12.1745C21.1936 11.8515 20.7551 11.5828 20.3385 11.368C19.9061 11.1452 19.4257 10.9445 18.9657 10.7768C18.5046 10.6087 18.0481 10.4677 17.6581 10.3675C17.3031 10.2762 16.9057 10.1923 16.6097 10.1923ZM13.6915 15.198V13.4954C13.9909 13.2482 14.5526 12.9336 15.2054 12.6549C15.5534 12.5063 15.8899 12.3839 16.1659 12.3005C16.4456 12.2159 16.5846 12.1961 16.6066 12.1929L16.6088 12.1926L16.611 12.1928C16.6229 12.1939 16.6683 12.1981 16.757 12.2141C16.8626 12.2332 16.9988 12.2632 17.1602 12.3047C17.4826 12.3876 17.8766 12.5086 18.2806 12.6559C18.6856 12.8037 19.0846 12.9719 19.4222 13.146C19.6851 13.2814 19.8753 13.4025 19.9986 13.4987V15.1975C19.9974 16.2393 19.6835 17.2568 19.0976 18.1181C18.5386 18.9399 17.7566 19.5834 16.845 19.9741C15.9334 19.5834 15.1514 18.9399 14.5925 18.1181C14.0066 17.2569 13.6928 16.2396 13.6915 15.198Z"/>',
      }}
    />
  )
)

SecurityProfileAccountOutline.displayName = 'SecurityProfileAccountOutline'

export const tags = ['SecurityProfileAccountOutline', '']