module.exports = (sequelize) => {
sequelize.import('account_statement_notifications', require('./account_statement_notifications'));
sequelize.import('accounts', require('./accounts'));
sequelize.import('banks', require('./banks'));
sequelize.import('collection_policies', require('./collection_policies'));
sequelize.import('comercial_activities', require('./comercial_activities'));
sequelize.import('companies', require('./companies'));
sequelize.import('company_intercom_data', require('./company_intercom_data'));
sequelize.import('company_payments', require('./company_payments'));
sequelize.import('company_site', require('./company_site'));
sequelize.import('company_user', require('./company_user'));
sequelize.import('contact_email', require('./contact_email'));
sequelize.import('contact_phone', require('./contact_phone'));
sequelize.import('contacts', require('./contacts'));
sequelize.import('contpaqi_license_config_log', require('./contpaqi_license_config_log'));
sequelize.import('contracts', require('./contracts'));
sequelize.import('credit_days', require('./credit_days'));
sequelize.import('credit_notes', require('./credit_notes'));
sequelize.import('credit_payments', require('./credit_payments'));
sequelize.import('credit_report_accounts', require('./credit_report_accounts'));
sequelize.import('credit_report_addresses', require('./credit_report_addresses'));
sequelize.import('credit_report_companies', require('./credit_report_companies'));
sequelize.import('credit_report_credits', require('./credit_report_credits'));
sequelize.import('credit_report_customers', require('./credit_report_customers'));
sequelize.import('credit_report_employments', require('./credit_report_employments'));
sequelize.import('credit_report_endorses', require('./credit_report_endorses'));
sequelize.import('credit_report_morals', require('./credit_report_morals'));
sequelize.import('credit_report_shareholders', require('./credit_report_shareholders'));
sequelize.import('credit_reports', require('./credit_reports'));
sequelize.import('cuenta_clabe_control', require('./cuenta_clabe_control'));
sequelize.import('currencies', require('./currencies'));
sequelize.import('customer_invites', require('./customer_invites'));
sequelize.import('customers', require('./customers'));
sequelize.import('customers_pending_balance', require('./customers_pending_balance'));
sequelize.import('customers_unassigned', require('./customers_unassigned'));
sequelize.import('customers_without_logbook', require('./customers_without_logbook'));
sequelize.import('discounts', require('./discounts'));
sequelize.import('dispersion_orders', require('./dispersion_orders'));
sequelize.import('distributor_levels', require('./distributor_levels'));
sequelize.import('distributors', require('./distributors'));
sequelize.import('economic_sectors', require('./economic_sectors'));
sequelize.import('erps', require('./erps'));
sequelize.import('extensions', require('./extensions'));
sequelize.import('failed_jobs', require('./failed_jobs'));
sequelize.import('historial_deuda_comentarios', require('./historial_deuda_comentarios'));
sequelize.import('history_assignments', require('./history_assignments'));
sequelize.import('history_invoices', require('./history_invoices'));
sequelize.import('import_data_service_logs', require('./import_data_service_logs'));
sequelize.import('incidence_reasons', require('./incidence_reasons'));
sequelize.import('incidences', require('./incidences'));
sequelize.import('index', require('./index'));
sequelize.import('invoice_json', require('./invoice_json'));
sequelize.import('jobs', require('./jobs'));
sequelize.import('licence_renewals', require('./licence_renewals'));
sequelize.import('licences', require('./licences'));
sequelize.import('license_payments', require('./license_payments'));
sequelize.import('licenses_contpaqi', require('./licenses_contpaqi'));
sequelize.import('licenses_feraz', require('./licenses_feraz'));
sequelize.import('logbook', require('./logbook'));
sequelize.import('logbook_payment', require('./logbook_payment'));
sequelize.import('migrations', require('./migrations'));
sequelize.import('notification_rules', require('./notification_rules'));
sequelize.import('notification_templates', require('./notification_templates'));
sequelize.import('notifications', require('./notifications'));
sequelize.import('notifications_config', require('./notifications_config'));
sequelize.import('notifications_customers', require('./notifications_customers'));
sequelize.import('notifications_sms', require('./notifications_sms'));
sequelize.import('notifications_templates', require('./notifications_templates'));
sequelize.import('oauth_access_tokens', require('./oauth_access_tokens'));
sequelize.import('oauth_auth_codes', require('./oauth_auth_codes'));
sequelize.import('oauth_clients', require('./oauth_clients'));
sequelize.import('oauth_personal_access_clients', require('./oauth_personal_access_clients'));
sequelize.import('oauth_refresh_tokens', require('./oauth_refresh_tokens'));
sequelize.import('password_resets', require('./password_resets'));
sequelize.import('pay_days', require('./pay_days'));
sequelize.import('payment_concepts', require('./payment_concepts'));
sequelize.import('payment_formats', require('./payment_formats'));
sequelize.import('payment_methods', require('./payment_methods'));
sequelize.import('payment_periods', require('./payment_periods'));
sequelize.import('payment_promise', require('./payment_promise'));
sequelize.import('payment_promise_receivables', require('./payment_promise_receivables'));
sequelize.import('payment_request_receivable', require('./payment_request_receivable'));
sequelize.import('payments', require('./payments'));
sequelize.import('payments_receivable', require('./payments_receivable'));
sequelize.import('payments_request', require('./payments_request'));
sequelize.import('periods', require('./periods'));
sequelize.import('permission_role', require('./permission_role'));
sequelize.import('permissions', require('./permissions'));
sequelize.import('plans', require('./plans'));
sequelize.import('promises_payment', require('./promises_payment'));
sequelize.import('receivables', require('./receivables'));
sequelize.import('receivables_notifications', require('./receivables_notifications'));
sequelize.import('recovery_goals', require('./recovery_goals'));
sequelize.import('role_user', require('./role_user'));
sequelize.import('roles', require('./roles'));
sequelize.import('sessions', require('./sessions'));
sequelize.import('sites', require('./sites'));
sequelize.import('sync_log', require('./sync_log'));
sequelize.import('transactions', require('./transactions'));
sequelize.import('transactions_files', require('./transactions_files'));
sequelize.import('user_notifications', require('./user_notifications'));
sequelize.import('user_sync_log', require('./user_sync_log'));
sequelize.import('user_sync_log_payments', require('./user_sync_log_payments'));
sequelize.import('users', require('./users'));
sequelize.import('webservices_log', require('./webservices_log'));
};
