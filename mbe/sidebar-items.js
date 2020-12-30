initSidebarItems({"enum":[["DelimiterKind",""],["ExpandError",""],["Origin",""],["ParseError",""]],"fn":[["ast_to_token_tree","Convert the syntax tree (what user has written) to a `TokenTree` (what macro will consume)."],["parse_to_token_tree","Convert a string to a `TokenTree`"],["syntax_node_to_token_tree","Convert the syntax node to a `TokenTree` (what macro will consume)."],["token_tree_to_syntax_node",""]],"struct":[["Delimiter",""],["ExpandResult",""],["MacroRules","This struct contains AST for a single `macro_rules` definition. What might be very confusing is that AST has almost exactly the same shape as `tt::TokenTree`, but there's a crucial difference: in macro rules, `$ident` and `$()*` have special meaning (see `Var` and `Repeat` data structures)"],["Punct",""],["TokenMap","Maps `tt::TokenId` to the relative range of the original token."]]});