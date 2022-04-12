import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MemaSwap Coin (MET)',
  description:
    'Built for the MemaSwap community from the community. Hold MEMA tokens to earn, win NFT & more...',
  image:
    'data:img/png;base64,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',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MemaSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MemaSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MemaSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MemaSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MemaSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MemaSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MemaSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MemaSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MemaSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MemaSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MemaSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MemaSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MemaSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MemaSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MemaSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MemaSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MemaSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MemaSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MemaSwap Info & Analytics')}`,
        description: 'View statistics for MemaSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MemaSwap Info & Analytics')}`,
        description: 'View statistics for MemaSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MemaSwap Info & Analytics')}`,
        description: 'View statistics for MemaSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MemaSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MemaSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('MemaSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('MemaSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('MemaSwap Squad')} | ${t('MemaSwap')}`,
      }
    default:
      return null
  }
}
