import { Box } from '@mui/material';
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import TypeList from '../../Components/TypeList';
import Sidebar from '../../Components/Sidebar';
import Logo from '../../Components/Logo';
import DateAndTime from '../../Components/DateAndTime';
import SearchComponent from '../../Components/SearchComponent';
import { AccountBox, AccountBoxRounded } from '@mui/icons-material';

const channels = [{name: 'HBO', logo: 'https://www.hatchwise.com/wp-content/uploads/2022/04/HBO-Symbol-700x394-1-600x338.jpeg.webp'}, 
{name: 'City', logo: 'data:image/png;base64,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'}, 
{name: 'NBC', logo:'https://cdn.freelogovectors.net/wp-content/uploads/2023/07/nbc_logo-freelogovectors.net_.png'}, 
{name: 'ESPN', logo: 'https://variety.com/wp-content/uploads/2013/09/espn-logo.jpg?w=1000'},
{name: 'HBO', logo: 'https://www.hatchwise.com/wp-content/uploads/2022/04/HBO-Symbol-700x394-1-600x338.jpeg.webp'}, 
{name: 'City', logo: 'data:image/png;base64,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'}, 
{name: 'NBC', logo:'https://cdn.freelogovectors.net/wp-content/uploads/2023/07/nbc_logo-freelogovectors.net_.png'}, 
{name: 'ESPN', logo: 'https://variety.com/wp-content/uploads/2013/09/espn-logo.jpg?w=1000'},
{name: 'HBO', logo: 'https://www.hatchwise.com/wp-content/uploads/2022/04/HBO-Symbol-700x394-1-600x338.jpeg.webp'}, 
{name: 'City', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAACeCAMAAABzT/1mAAAAjVBMVEUAAAD////m5ubl5eXk5OT09PTx8fHr6+v4+Pj6+vrt7e3w8PC1tbXa2toVFRWnp6fIyMitra0iIiLOzs7ExMRRUVGIiIi4uLheXl5JSUnFxcV6enqKioooKCihoaG+vr5paWk4ODgvLy9wcHCUlJQ9PT0NDQ1MTExZWVkkJCSZmZkcHByAgIBzc3M0NDRhDzblAAAUZUlEQVR4nO1da3ujKhCOIIoaN0nTNullk3TbzXbb7f7/n3cEVC6iM2h6Od3OJx4NjLyBYRhmhlkkKKeE0EIWY1IVM1Fi1UNC5MNUPEza9+phlMZlWcYVkThlnMtnmXgfy2IhGs1lUbRE5Q+4LJpM86qRtaBSki6ujadto4mon8oiaRvNaPs+10xjm6m3J7Huaarfs/6eEKfRWSh+jMXr/dPt4e9xZtHxx+F2t4wZT9Iw/BYzmHbpJ8CvapWtd9vvgz093t2syiIEv9W/gB9Nk2L9dIXoqqDvLxv+b+EXUxrX+NGqqFoVDxVXxvb335Dg1fS4YQWhca4bVVxl0WSKw6+plIhKqqs0bhrNnEZzpyeSqfrTUvE+6e8pEUXmNFpopk5P6CwXxDLOMyaLVYlnhSglosjzvIjKyzDsarpfV5+mG03aRjODaYKRf4vIqsRlkbeNFm6jPT0RlaD3vY163/MZdQCtZ0FFajymfP53FHqC7vbV1G+Hhmi0MzTSHQo/MTSob2g4jXYGue6JPd5oI5ns8dgOcloLCYDpzJ3QNddWHi4C561Dv+cs7RFNwfhp0UR9omlIyNpMvZqFIe9cITvAFMBv/nsSeoLurpnRlZPgF5E0TWvJXBVJoR9mb41f7/ytRvX6bjJ6gg6kbXTy/OXJ+XK5PBe0FHQtSteyeN4WM3v+elfGU83fQhATopDJoijxRDxLbk6CnqBNVDdaJLJ9gylDrR9ZU4kvET+P7J50mTrvjYcMXUm979dfrqeCZtI2TU+jvzAUfu4gD9BfvONtQH/pkxKnG3ySvpXFSfTnEPzebf8RR/l4naWP5tG/gh8t1lPB8oLwDvjFHfxoD360s95ClqTYwE8Ui+YHbD4VKj/dCq5EK0mKKQq/vFU98PhJ0FRXHaaJfq8aJdb4Iwo/0v7ThSjq8Wc2OhP2u0bKCqoKmBVxFF0mzdZUMyUY/WUlP11U4pipETU9EYtURYXDlEmjpcJLFBP9XpYSUarHoyjW49FutFd/xnRoJF3yqfozDr/323/Q14RvNnuKPjl+xSvJvob2nw0/OavrBaWa1CfVmn2UtqImQP4tWlH04eRfJqiott5pkWVRPBUekH7zipVmmqDW30XRVGIo/ORPRfMpl5VkUT7MJVPf+1y/Z6LEdaVEv0+d947+92MqPDC9MPqG+l+tWVSckPofBfQ/2iqVpv5X43eYBg2O5vln3X+88tpR0zH9fPhJUwibigySXpjBFKUvPZ3O/kJ77C8UsL/U89s1l86YpKSiaDsVGCytecuUMbECCqmdE3GgRqQAF8jStH0Yy9/KOrj1t20+Yb6i92EyqpJhf96/Om4N/eTG0LC3pmpoav3N2Joq+zNOf3GNjL3jbZz9WR+SGvrztIOiINqnrf6MF00fU39u8Xt4ddQ0feefCj8xf5MRMFy8PKxWq8XD/UVozU06UjVDzt+2q65lWDfqMnXwM5jGA+vxrNbCoz+BCPx9KOWsz4siYRG/fgmqfcWtrUHk2xpkemsg3kfqS1H46UabnVVFxNmP9DPV+43I2W+QzGm00f/KMPQehWtGJUSbXSJNGbkNaaBEbk2Zfi9LIfqLbdmkutGkn6l3v1vo/bBtLojjGr8kyMPleemREiRKA6bxPd5pzpo6H1R/JiHw3eetlHCkbMAQZJ8JPxZiNN1liqtvlcKb/lefCb/oCH9U2/FkyEr2hG3mypR/2p8lU+uFnBRS3jvvceuH26hcOhQUcj1o3lNA/jVONnK9UPi2Tjaqfam/pAHnlbvmXzJOqVSDiSyh1+GyPvrKN5vNXNBm05T8RVnaYP6gvVupr1GmepL4eiL+xP3Ql4jSeibH8z0avnv1L/isZIka5cP+0Zp2ajzFHM379DQf1v9gg8pKjj+87vyc90uJWh5ix/JVg98b7htdOgzvP2CLQC7wSzdohksYv+iAbIu/P36zbBA/0AfoQvr/FQcsuwMbsJI1rt1YXWj9AfBb53GP/UX05BmqPo9mjHG8BKKNl5wk6QWnTGHmw+yAa+yBy/pvaffp0GXU35ME3pNVkq+CG7363nf+JZ+VLEWegV5xZZp7T/zOlH7itT/DJ9MXTPr/oS1XZWRqnb1WngzZHFf683viN5NDwa8/J+B2dJVK/RkbVvQzwuFXIG055QfA76kfP1iOx3L/gdZeVo6UpT1WbnKOa2+T0nfH72c7f92eRKBWsmWUzrIMs6OUJIxjTRSPsJKpKB5pRVNROs175D/ywEToz/viJzvFfD2BtZd5hcAszrFb1p88HowSM0LTcHEPL++vv1STivToLwx0YRZSbEYY9tjyKR+2UhjyECcADx8Bvy3r0Z9B7UV8vsAPu2EtCRo/nDns+0fAr9ICvPiloClur/BDu1wRPH7lbrFYrCQtFlbRfLj4EPjtUx9+lD9CFSOFH36/D5wSmPZAYlvJ1Hvx0I1f4zF7Z/z+5F7/vxyqpyxRM3iZrukm8knZxn46fEo/FD/9zuvv7NkfPw2Kv2ui4o+wu4+dMgVD+nNw/o33xq/agriH9KInICxZbb/HHvyeMxR+3lP6D43fzrv/gDxJX6IaP+yhY/lZ8bvw4VdAtZbN+MN+Pumzkr2B/Hu5qehWEGa2HOUvb29kJcTw4B75B5mej6qnlfxDfJCgb1zuclQArMy6IKNidVYFnuj3efueOe+TznsMfvLsSzgN8hTxqb+VUU/ikSEcK+a80xPQhnnDVU9nmA8SdNXxmuvs37Q9QTsVOqHg3fhzlP4nWxXrHUpbPTP9/zjsEi83EvbMAk+OrkkT/4H4IEGP4CmzN7UN1/LQn/8gAD9BOPwMIZsj9kLc7QmoFD/nDX5Yx6Ht/xQ/TI2l2xPQpvInafzXsNuPAzx/fV7Wp5m/+fj5GzNwIyYDa635C5qelyQUv/vISKAAZVUIeY9ZP2hbCXO499vKH8Hg45gfkZ0/gkHay3fe5o/Azt/7fEh/Abysp+ovJWkbRXzqc2QPcvAYUrRv6i8cgvy26QlF43dTuF5Lb6g/G/kTEZ/a4Ncwhb3qhGnTkOwZ5A1ZRq3/1SfE78zBD5aZV9VnG/H7HLCf/2h7MhU/ZNaF+L3GnxIa8AGjNRLARerBwA+r/90r/OT4osD462RdcMaflT8Cix8NxU8zhb0656kx/nLo9+WI8XcPelkb9lPtZe2POjZduzH207xlmsOLQbX+2kwpaAuVxk1dCdB4njMjfho7/g4fQ3/G4Hfmxs/wA1jH7AnkP/HEjfgP+L9R9EH2H6PwQzhNr42eQCpxnBj4YYNW/8/4FbCR6dboCaDv3FnxR9jjr8cQ+UcD5B9+/yaZIjIMnHXzR4Aq4J0h/wAWOyt/RPQL/iDJgPVHOQ1kXSj6Uzmo/BEo/40ybypx1PhzmebwKlk2PcmhFaHMrfwRyER1x3xI/wOi7IxUXiJecIL+lyFO+039rxnk4LBd1JEUNAWyGNwxO38E9vyNfIj9RyB+DVNQpZs9quPFlLLD8A93uR0/g00a8Z7nR5PxQ9i9Gssc5M1cOvFHWAV6U+M3Jsq9NzVzsP0Fg1+z/zXzR8BeUpt6JADayy/m5I+g8AdJ2mX4rAv1XRbCi64teYqyEga/uM0fkSHW32dP/ggOxnLcy1pJBsizVebkjyjO4C9S7QNZPgx74Obq4uLicVvR44WgbVuUD7fy4SPef621P8fZT/jXv735I6AQv7NCVQJMz0Xk5I9gSAXmZ4bXn3Fr0haNX6s/Uwx+Hv05QvgkLmVPAPH36Ej2alnFhk5LeYnDD/eX4P1PT4EfKOdvC9ETYJ6vOvhB+k5LMumIkXXBGz+o8MM1iPf/q89/0fh580dAK88PsUxD6nDm4pemaAsMb7IuqChYFjVZGWRWBenfJ1M9YANyqj17xEiGwq9hGqHkn/IvFB+Vq9BdUQT9vEtRadjr+UK2VLSNyvwRyKR1R6UVeP0lrf1wjpQIhMZo/aVhinFNb/Q/O38EAY+eVvAs36TOzl7gh001Lo+ZYf2ZIuOPjuK3ofozBj/3/KMxekNSWawNwD7FG7+P9UC9wOGXIhNpvSQj9h8h48/FDxT0GaS9bL34oQOQYhR+WIVok74xfuCydg5FnO/9+SOQHZYKGyj/0A7pMY1HyD/E+uGXfxQWVDfQypd1TnbEyV2BDsBc594s53bWBaRD651siRG0/iKZYoIdz+p8PoKMzPQEDqwFlOwtV40aJ4syqgOdvOlHAet/2DSC8hA1WP/D4deTPyyBbiMqh1WRavVV+Jn6M4HP2zXd8Hb8+fcf2NjBaiyPOf9A4ufbfwj8IMXqZXiT3Je/Do5VamkB4Jdh3dF/sLfHDz/RvHRgPfdH0YDkf3M1lXrsLxydSWaXj/H/izH4Pffm70wQq08/7Yknf6dytT7gW9lFSdFj/+MRPgsg5YmqFWb/QwXL9+aPzaZczXH05o9VgKJjqCs61KmkuvbnDJ/BdzvS/ozCb92Mt07+4jFZNhuSAWyd/MVqlPOggb3S8s7M/7dGnC02tB55/oHCb9vIu67TEuzMO/TJvfn/AlIQCfqxymT+yXb8kZSvQ9JH/43G4odanza9+I1Psf4tGsCPJqEXbh1W64JXMkzWz8pd2FWF80hf7Rk2f3EDaNmdv3W8bNBnmqTiTzvzt3YFSMZkz36+eLkUMVXYBCgtHYXtTAQxof0Pqp9KVwLsBHwSoR9VJaacHtr8EHz0vXbrqMkvYTaq848HgzCBVmk8In5BaA1oAfa8U0Ff+jhQKTWjr2ZzlSI3f/ar3Pnmp9+cjPS/oiFJ+u8eD5K2C72eZNh4P5duI69ngJG/HZ9EcSqdp+PxO4zgd2niNzLPegni91bXV8wex/v/nQC/cXu44+D9Ucoh4NXuzXMoneD/HB1GMKzxq5mOutrzoe/+qFp/karEBOUygHZFbDIN1F/C8sQrukyMyD1MQGaX1k0kgX//oVRZFpDGeDRdsUn+V0FZ4mu6TFr9OaWjjDDfmd+TzLk/KmQbPJbiSf5rfMzoMfEjhI3Q1G4L3P21r38JyCqfhB8bo+fb+I2ZwCXm/qi3UGL+yFwNFtMg+ZeMueHvjzQVKfwE0+AG/ia993fbqR6KMENMMP3KRuWPIFmbtAKZG8+iy8hiGr5O7qK+TBgzZ0EhEdIdcBR9z92rnELtzywKumlD0aXDNNgII+a+6VmrI+m79/+i89mF03NMJsbPUDZmn3npMg2sL1Ol4+6vrZDGhKiMomOZTo0/EodW4Z/n4hd6091uAD9XIRS/fCUZWME3NX+EOLTCXPhokzt/s8AJrKIK/fNXJE1oRLkoVoUs4BwDT0eW5EWTf8hgGrB+qErhFpR6/dBMwybwz8iCR6wfRdMTV3+prVyn1wN/FdoUPEl/QadH1uTqL0mYmrbg2jO+o7+orlinzEJKnHon8oedKH6/qsRD98C2/izynQZp4cyIVwX2H1rKFsF34g3RnJ0q/4GonwTuwLr4YVPMC7pC3//b4KekbLic7qOLOKcnxI/mPEzHsu0HMt9ugIRfDUSiDeEXkRMtIysVn3k6/NKIBxnxLuWotfALOK9NevBT8ZeOl2FcS1nl2lieQJM5xEXH6jjefto4LSGyWmm6dJhWe3D8HviKdSLFTftpV3+2xuNyIoK/1vyU8fvGJRkB4sXVnxkl+H3+KsXdX+vHL0qWE6zS27Xs9WvgR3O8KdWDH97nNkbe/9uDX5yy8hLy2/TTTWxxPS1+olG+wBljPPilWCXykQ3jZ+/fWvmn9em42vRn65tQ0/7Vos6K7jt1tvZviMYUfr4kteVuCxuM/jhMK/mH9nJfpXGHqXl+bqZy8KR6UF4PRcGS61u8ZevXqhrHbv4I1pM/Yg7Sirb5I9ykFeKfz8vzzWD9da57UvcUfdiYeDJhWPkj3PlalZp/yYoXJDwqrm/hUIdfD+epO8rFpTS+/BGU4u6/1FPHTVqhQgl0ffn/JG6jnkuukSr41ukJ1ZpYTIf2Hz23hEe83D+9bH02pOPF4eG8rPbpKXXxc7TOgKvJUUl6BoRs3/2r2DOQvdMT9P6tD7+YpMqInK/38/liJe/TnJ+v41SZhsS/EpY/4u3xY3hXATdetQ8/2/7SSFkrX6ybv5MRfasr0flfrPwRpr2vL3/EINOBJLXEm6TWv0hpzYKQnOFdPQ9uTzrn59oV2p8Kov8h9B7V6BsxFb56Mj9snpdPAdaHTQZ8qc/+bOsvvqEB5Y+gAUNDj7fYHuSa6fQktXjEbAKZwvpza094nfxrPULWw7SrP0doITsSvheQ6Rd+Q7TE4WckxPIujboryPwRxtIY9+EXd/CjPfgZ+h50yY3REyt+cCR+cGZcdauW4krMVap7Kzgj1vjrjV+13huNyqjPosVXMTUaHcXUCCUd6sk4+G6GemL5//lMc0a+RGkP9N1S5c0fETdS1m60HhpuasNeprpRP9OAJI3YK50dWhOjJ/7MuCP051PnXxtkehr9GXvJiU1b3u2Ju1x84Tc0/L7wm4DfC8fj98nl3yj8hDUUln8yKxIX+ZG4kfVIXLWYiId1fiZRFPtdUudvInX+JvO9vJ8xt/M7NY2KYiHei6xHtWmJN43WSaH6meb9TAv9ngz0ZAR8c0RPsuz19L/4/63/HTIU06/9h5/OGI7pF35+ipFMv+wvXipT5M1E/4b9LzS0r8ywX+r3/0PZnzH5iz+I/TlMf/nW8TcdsD/XXfnSn1u6SF3N4Wv/EQDfgpMBfQWDn//8t8WPeu8PoIP3BwDnv/LQrsuUDiuZ1KtkUo+SicdvG+dGT2h3JFBin//qU3nvVRPGUb/rnxB6f0WP/8EwU2+jA+/9PcHcuifoai1bRfWk9j8A/V8s0e7est6nv8Qh+ktsuXa376OWKfKS5tjTkxD9ZbtkxO2Jl6k3f8Q/rj9frOIk7enJ1/4DmLYP14nrZPOFn9mTzX6/l65Ye0myeD5fLFbz63VtIxvoyQDT/wB1IL3jlhHB1gAAAABJRU5ErkJggg=='}, 
{name: 'NBC', logo:'https://cdn.freelogovectors.net/wp-content/uploads/2023/07/nbc_logo-freelogovectors.net_.png'}, 
{name: 'ESPN', logo: 'https://variety.com/wp-content/uploads/2013/09/espn-logo.jpg?w=1000'},
{name: 'HBO', logo: 'https://www.hatchwise.com/wp-content/uploads/2022/04/HBO-Symbol-700x394-1-600x338.jpeg.webp'}, 
{name: 'City', logo: 'data:image/png;base64,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'}, 
{name: 'NBC', logo:'https://cdn.freelogovectors.net/wp-content/uploads/2023/07/nbc_logo-freelogovectors.net_.png'}, 
{name: 'ESPN', logo: 'https://variety.com/wp-content/uploads/2013/09/espn-logo.jpg?w=1000'}];

const types = ['Live TV\'s', 'Movies', 'TV Shows', 'Sports'];
const navigationItems = ['Home', 'Favorites', 'Watch Later'];

export const ChannelDesktop = () => (
  <Box sx={{display: 'flex', backgroundColor:'#161c2f'}}>
    <Sidebar navigationItems={navigationItems} channels={channels} />
    <Box flex={1}>
        <Header >
          <Logo/>
          <Box sx={{display:'flex', alignItems:'center', gap:2, alignSelf:'flex-end'}}>
            <DateAndTime />
            <SearchComponent/>
            <AccountBoxRounded fontSize='large' />
          </Box>
        </Header>
        <Banner />
        <Box sx={{width:'75%', marginTop: '55vh', position:'absolute', right:0}}>
            <TypeList types={types} />
        </Box>
    </Box>
  </Box>
);