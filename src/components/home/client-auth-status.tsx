'use client'

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function ClientAuthStatus() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Link href="/login" className="nav-link nav-link-cta">
        登录
      </Link>
    )
  }

  return (
    <>
      <Link href="/profile" className="nav-link nav-link-ghost">
        {session.user?.name || '我的学习'}
      </Link>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="nav-link nav-link-danger"
        type="button"
      >
        退出
      </button>
    </>
  )
}
