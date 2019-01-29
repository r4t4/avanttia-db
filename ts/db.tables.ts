// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  account_statement_notifications:def.account_statement_notificationsModel;
  average_monthly_invoices:def.average_monthly_invoicesModel;
  agent_sales:def.agent_salesModel;
  accounts:def.accountsModel;
  autologin_tokens:def.autologin_tokensModel;
  average_monthly_payment:def.average_monthly_paymentModel;
  banxico_exchange_rate:def.banxico_exchange_rateModel;
  banks:def.banksModel;
  comercial_activities:def.comercial_activitiesModel;
  collection_policies:def.collection_policiesModel;
  companies:def.companiesModel;
  company_payments:def.company_paymentsModel;
  company_intercom_data:def.company_intercom_dataModel;
  company_site:def.company_siteModel;
  company_user:def.company_userModel;
  conflict_documents:def.conflict_documentsModel;
  contacts:def.contactsModel;
  contact_email:def.contact_emailModel;
  contact_phone:def.contact_phoneModel;
  contpaqi_license_config_log:def.contpaqi_license_config_logModel;
  contracts:def.contractsModel;
  credit_days:def.credit_daysModel;
  credit_notes:def.credit_notesModel;
  credit_payments:def.credit_paymentsModel;
  credit_report_accounts:def.credit_report_accountsModel;
  credit_report_addresses:def.credit_report_addressesModel;
  credit_report_companies:def.credit_report_companiesModel;
  credit_report_credits:def.credit_report_creditsModel;
  credit_report_employments:def.credit_report_employmentsModel;
  credit_report_customers:def.credit_report_customersModel;
  credit_report_endorses:def.credit_report_endorsesModel;
  credit_report_morals:def.credit_report_moralsModel;
  credit_report_shareholders:def.credit_report_shareholdersModel;
  credit_reports:def.credit_reportsModel;
  cuenta_clabe_control:def.cuenta_clabe_controlModel;
  currencies:def.currenciesModel;
  customer_balances:def.customer_balancesModel;
  customer_invites:def.customer_invitesModel;
  customers:def.customersModel;
  customer_kpis:def.customer_kpisModel;
  customers_pending_balance:def.customers_pending_balanceModel;
  customers_unassigned:def.customers_unassignedModel;
  customers_without_logbook:def.customers_without_logbookModel;
  discounts:def.discountsModel;
  dispersion_orders:def.dispersion_ordersModel;
  distributor_levels:def.distributor_levelsModel;
  distributors:def.distributorsModel;
  economic_sectors:def.economic_sectorsModel;
  erps:def.erpsModel;
  extensions:def.extensionsModel;
  failed_jobs:def.failed_jobsModel;
  formulas:def.formulasModel;
  historial_deuda_comentarios:def.historial_deuda_comentariosModel;
  history_assignments:def.history_assignmentsModel;
  history_invoices:def.history_invoicesModel;
  import_data_service_logs:def.import_data_service_logsModel;
  incidence_reasons:def.incidence_reasonsModel;
  incidences:def.incidencesModel;
  invoice_json:def.invoice_jsonModel;
  invoices_expired:def.invoices_expiredModel;
  invoices_to_expire:def.invoices_to_expireModel;
  jobs:def.jobsModel;
  licence_renewals:def.licence_renewalsModel;
  licences:def.licencesModel;
  license_payments:def.license_paymentsModel;
  licenses_contpaqi:def.licenses_contpaqiModel;
  licenses_feraz:def.licenses_ferazModel;
  logbook:def.logbookModel;
  logbook_payment:def.logbook_paymentModel;
  longest_invoice_years:def.longest_invoice_yearsModel;
  migrations:def.migrationsModel;
  notification_rules:def.notification_rulesModel;
  notification_templates:def.notification_templatesModel;
  notifications:def.notificationsModel;
  notifications_config:def.notifications_configModel;
  notifications_customers:def.notifications_customersModel;
  notifications_sms:def.notifications_smsModel;
  notifications_templates:def.notifications_templatesModel;
  number_invoices:def.number_invoicesModel;
  number_payments:def.number_paymentsModel;
  number_promises:def.number_promisesModel;
  number_promises_accomplished:def.number_promises_accomplishedModel;
  number_promises_expired:def.number_promises_expiredModel;
  oauth_access_tokens:def.oauth_access_tokensModel;
  oauth_auth_codes:def.oauth_auth_codesModel;
  oauth_clients:def.oauth_clientsModel;
  oauth_personal_access_clients:def.oauth_personal_access_clientsModel;
  oauth_refresh_tokens:def.oauth_refresh_tokensModel;
  password_resets:def.password_resetsModel;
  pay_days:def.pay_daysModel;
  payment_concepts:def.payment_conceptsModel;
  payment_formats:def.payment_formatsModel;
  payment_methods:def.payment_methodsModel;
  payment_periods:def.payment_periodsModel;
  payment_promise:def.payment_promiseModel;
  payment_promise_receivables:def.payment_promise_receivablesModel;
  payment_request_receivable:def.payment_request_receivableModel;
  payments:def.paymentsModel;
  payments_per_month:def.payments_per_monthModel;
  payments_receivable:def.payments_receivableModel;
  payments_request:def.payments_requestModel;
  periods:def.periodsModel;
  permission_role:def.permission_roleModel;
  permissions:def.permissionsModel;
  plans:def.plansModel;
  promises_payment:def.promises_paymentModel;
  ranges:def.rangesModel;
  receivables:def.receivablesModel;
  receivables_notifications:def.receivables_notificationsModel;
  recovery_goals:def.recovery_goalsModel;
  risk_score_log:def.risk_score_logModel;
  related_documents:def.related_documentsModel;
  role_user:def.role_userModel;
  sites:def.sitesModel;
  sat_sync_webhook_log:def.sat_sync_webhook_logModel;
  roles:def.rolesModel;
  sales_agent:def.sales_agentModel;
  sync_log:def.sync_logModel;
  total_monthly_invoice:def.total_monthly_invoiceModel;
  transactions:def.transactionsModel;
  transactions_files:def.transactions_filesModel;
  user_notifications:def.user_notificationsModel;
  user_sync_log:def.user_sync_logModel;
  user_sync_log_payments:def.user_sync_log_paymentsModel;
  users:def.usersModel;
  webservices_log:def.webservices_logModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    account_statement_notifications: seq.import(path.join(__dirname, './account_statement_notifications')),
    average_monthly_invoices: seq.import(path.join(__dirname, './average_monthly_invoices')),
    agent_sales: seq.import(path.join(__dirname, './agent_sales')),
    accounts: seq.import(path.join(__dirname, './accounts')),
    autologin_tokens: seq.import(path.join(__dirname, './autologin_tokens')),
    average_monthly_payment: seq.import(path.join(__dirname, './average_monthly_payment')),
    banxico_exchange_rate: seq.import(path.join(__dirname, './banxico_exchange_rate')),
    banks: seq.import(path.join(__dirname, './banks')),
    comercial_activities: seq.import(path.join(__dirname, './comercial_activities')),
    collection_policies: seq.import(path.join(__dirname, './collection_policies')),
    companies: seq.import(path.join(__dirname, './companies')),
    company_payments: seq.import(path.join(__dirname, './company_payments')),
    company_intercom_data: seq.import(path.join(__dirname, './company_intercom_data')),
    company_site: seq.import(path.join(__dirname, './company_site')),
    company_user: seq.import(path.join(__dirname, './company_user')),
    conflict_documents: seq.import(path.join(__dirname, './conflict_documents')),
    contacts: seq.import(path.join(__dirname, './contacts')),
    contact_email: seq.import(path.join(__dirname, './contact_email')),
    contact_phone: seq.import(path.join(__dirname, './contact_phone')),
    contpaqi_license_config_log: seq.import(path.join(__dirname, './contpaqi_license_config_log')),
    contracts: seq.import(path.join(__dirname, './contracts')),
    credit_days: seq.import(path.join(__dirname, './credit_days')),
    credit_notes: seq.import(path.join(__dirname, './credit_notes')),
    credit_payments: seq.import(path.join(__dirname, './credit_payments')),
    credit_report_accounts: seq.import(path.join(__dirname, './credit_report_accounts')),
    credit_report_addresses: seq.import(path.join(__dirname, './credit_report_addresses')),
    credit_report_companies: seq.import(path.join(__dirname, './credit_report_companies')),
    credit_report_credits: seq.import(path.join(__dirname, './credit_report_credits')),
    credit_report_employments: seq.import(path.join(__dirname, './credit_report_employments')),
    credit_report_customers: seq.import(path.join(__dirname, './credit_report_customers')),
    credit_report_endorses: seq.import(path.join(__dirname, './credit_report_endorses')),
    credit_report_morals: seq.import(path.join(__dirname, './credit_report_morals')),
    credit_report_shareholders: seq.import(path.join(__dirname, './credit_report_shareholders')),
    credit_reports: seq.import(path.join(__dirname, './credit_reports')),
    cuenta_clabe_control: seq.import(path.join(__dirname, './cuenta_clabe_control')),
    currencies: seq.import(path.join(__dirname, './currencies')),
    customer_balances: seq.import(path.join(__dirname, './customer_balances')),
    customer_invites: seq.import(path.join(__dirname, './customer_invites')),
    customers: seq.import(path.join(__dirname, './customers')),
    customer_kpis: seq.import(path.join(__dirname, './customer_kpis')),
    customers_pending_balance: seq.import(path.join(__dirname, './customers_pending_balance')),
    customers_unassigned: seq.import(path.join(__dirname, './customers_unassigned')),
    customers_without_logbook: seq.import(path.join(__dirname, './customers_without_logbook')),
    discounts: seq.import(path.join(__dirname, './discounts')),
    dispersion_orders: seq.import(path.join(__dirname, './dispersion_orders')),
    distributor_levels: seq.import(path.join(__dirname, './distributor_levels')),
    distributors: seq.import(path.join(__dirname, './distributors')),
    economic_sectors: seq.import(path.join(__dirname, './economic_sectors')),
    erps: seq.import(path.join(__dirname, './erps')),
    extensions: seq.import(path.join(__dirname, './extensions')),
    failed_jobs: seq.import(path.join(__dirname, './failed_jobs')),
    formulas: seq.import(path.join(__dirname, './formulas')),
    historial_deuda_comentarios: seq.import(path.join(__dirname, './historial_deuda_comentarios')),
    history_assignments: seq.import(path.join(__dirname, './history_assignments')),
    history_invoices: seq.import(path.join(__dirname, './history_invoices')),
    import_data_service_logs: seq.import(path.join(__dirname, './import_data_service_logs')),
    incidence_reasons: seq.import(path.join(__dirname, './incidence_reasons')),
    incidences: seq.import(path.join(__dirname, './incidences')),
    invoice_json: seq.import(path.join(__dirname, './invoice_json')),
    invoices_expired: seq.import(path.join(__dirname, './invoices_expired')),
    invoices_to_expire: seq.import(path.join(__dirname, './invoices_to_expire')),
    jobs: seq.import(path.join(__dirname, './jobs')),
    licence_renewals: seq.import(path.join(__dirname, './licence_renewals')),
    licences: seq.import(path.join(__dirname, './licences')),
    license_payments: seq.import(path.join(__dirname, './license_payments')),
    licenses_contpaqi: seq.import(path.join(__dirname, './licenses_contpaqi')),
    licenses_feraz: seq.import(path.join(__dirname, './licenses_feraz')),
    logbook: seq.import(path.join(__dirname, './logbook')),
    logbook_payment: seq.import(path.join(__dirname, './logbook_payment')),
    longest_invoice_years: seq.import(path.join(__dirname, './longest_invoice_years')),
    migrations: seq.import(path.join(__dirname, './migrations')),
    notification_rules: seq.import(path.join(__dirname, './notification_rules')),
    notification_templates: seq.import(path.join(__dirname, './notification_templates')),
    notifications: seq.import(path.join(__dirname, './notifications')),
    notifications_config: seq.import(path.join(__dirname, './notifications_config')),
    notifications_customers: seq.import(path.join(__dirname, './notifications_customers')),
    notifications_sms: seq.import(path.join(__dirname, './notifications_sms')),
    notifications_templates: seq.import(path.join(__dirname, './notifications_templates')),
    number_invoices: seq.import(path.join(__dirname, './number_invoices')),
    number_payments: seq.import(path.join(__dirname, './number_payments')),
    number_promises: seq.import(path.join(__dirname, './number_promises')),
    number_promises_accomplished: seq.import(path.join(__dirname, './number_promises_accomplished')),
    number_promises_expired: seq.import(path.join(__dirname, './number_promises_expired')),
    oauth_access_tokens: seq.import(path.join(__dirname, './oauth_access_tokens')),
    oauth_auth_codes: seq.import(path.join(__dirname, './oauth_auth_codes')),
    oauth_clients: seq.import(path.join(__dirname, './oauth_clients')),
    oauth_personal_access_clients: seq.import(path.join(__dirname, './oauth_personal_access_clients')),
    oauth_refresh_tokens: seq.import(path.join(__dirname, './oauth_refresh_tokens')),
    password_resets: seq.import(path.join(__dirname, './password_resets')),
    pay_days: seq.import(path.join(__dirname, './pay_days')),
    payment_concepts: seq.import(path.join(__dirname, './payment_concepts')),
    payment_formats: seq.import(path.join(__dirname, './payment_formats')),
    payment_methods: seq.import(path.join(__dirname, './payment_methods')),
    payment_periods: seq.import(path.join(__dirname, './payment_periods')),
    payment_promise: seq.import(path.join(__dirname, './payment_promise')),
    payment_promise_receivables: seq.import(path.join(__dirname, './payment_promise_receivables')),
    payment_request_receivable: seq.import(path.join(__dirname, './payment_request_receivable')),
    payments: seq.import(path.join(__dirname, './payments')),
    payments_per_month: seq.import(path.join(__dirname, './payments_per_month')),
    payments_receivable: seq.import(path.join(__dirname, './payments_receivable')),
    payments_request: seq.import(path.join(__dirname, './payments_request')),
    periods: seq.import(path.join(__dirname, './periods')),
    permission_role: seq.import(path.join(__dirname, './permission_role')),
    permissions: seq.import(path.join(__dirname, './permissions')),
    plans: seq.import(path.join(__dirname, './plans')),
    promises_payment: seq.import(path.join(__dirname, './promises_payment')),
    ranges: seq.import(path.join(__dirname, './ranges')),
    receivables: seq.import(path.join(__dirname, './receivables')),
    receivables_notifications: seq.import(path.join(__dirname, './receivables_notifications')),
    recovery_goals: seq.import(path.join(__dirname, './recovery_goals')),
    risk_score_log: seq.import(path.join(__dirname, './risk_score_log')),
    related_documents: seq.import(path.join(__dirname, './related_documents')),
    role_user: seq.import(path.join(__dirname, './role_user')),
    sites: seq.import(path.join(__dirname, './sites')),
    sat_sync_webhook_log: seq.import(path.join(__dirname, './sat_sync_webhook_log')),
    roles: seq.import(path.join(__dirname, './roles')),
    sales_agent: seq.import(path.join(__dirname, './sales_agent')),
    sync_log: seq.import(path.join(__dirname, './sync_log')),
    total_monthly_invoice: seq.import(path.join(__dirname, './total_monthly_invoice')),
    transactions: seq.import(path.join(__dirname, './transactions')),
    transactions_files: seq.import(path.join(__dirname, './transactions_files')),
    user_notifications: seq.import(path.join(__dirname, './user_notifications')),
    user_sync_log: seq.import(path.join(__dirname, './user_sync_log')),
    user_sync_log_payments: seq.import(path.join(__dirname, './user_sync_log_payments')),
    users: seq.import(path.join(__dirname, './users')),
    webservices_log: seq.import(path.join(__dirname, './webservices_log')),
  };
  return tables;
};
