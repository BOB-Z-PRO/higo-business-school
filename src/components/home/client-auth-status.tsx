'use client'

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function ClientAuthStatus() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Link href="/login" className="nav-link" style={{ color: '#38A169', fontWeight: 600 }}>
        登录
      </Link>
    )
  }

  return (
    <>
      <Link href="/profile" className="nav-link" style={{ color: '#38A169', fontWeight: 600 }}>
        {session.user?.name || '我的学习'}
      </Link>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="nav-link"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#E53E3E' }}
      >
        退出
      </button>
    </>
  )
}
