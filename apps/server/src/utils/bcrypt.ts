import { createHash, pbkdf2, randomBytes } from "node:crypto"

const hashPassword = async (
  password: string
): Promise<{ hash: string; salt: string }> => {
  const salt = randomBytes(16).toString("hex")
  return new Promise((resolve, reject) => {
    pbkdf2(password, salt, 1000, 64, "sha512", (error, derivedKey) => {
      if (error) {
        return reject(error)
      }
      return resolve({ hash: derivedKey.toString("hex"), salt })
    })
  })
}

const comparePassword = async (
  password: string,
  salt: string,
  hash: string
): Promise<boolean> => new Promise((resolve, reject) => {
    pbkdf2(password, salt, 1000, 64, "sha512", (error, derivedKey) => {
      if (error) {
        return reject(error)
      }
      return resolve(hash === derivedKey.toString("hex"))
    })
  })

const md5hash = async (text: string) => createHash("md5").update(text).digest("hex")

export { comparePassword, hashPassword, md5hash }
