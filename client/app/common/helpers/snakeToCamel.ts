type OwnProps = { [key: string]: unknown }

const snakeToCamel = <T>(obj: OwnProps) => {
  const result = Object.entries(obj).reduce((acc, [key, entry]) => {
    acc[
      key.replace(/([-_][a-z])/gi, $1 => {
        return $1.toUpperCase().replace('-', '').replace('_', '')
      })
    ] = entry

    return acc
  }, {} as OwnProps)

  return result as T
}

export { snakeToCamel }
